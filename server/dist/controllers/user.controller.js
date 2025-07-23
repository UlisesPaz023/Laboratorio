"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = __importDefault(require("../utils/base.controller"));
const user_service_1 = __importDefault(require("../services/user.service"));
const prisma_1 = require("../generated/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const bigint_helper_1 = require("../helpers/bigint.helper");
const prisma = new prisma_1.PrismaClient();
const { getAll, getById, update, remove, } = base_controller_1.default;
const createUserWithRole = (role) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const { correo, nombre, apellido, documento, contrasenia } = userData;
        const hashedPassword = yield bcrypt_1.default.hash(contrasenia, 10);
        // Validar correo único
        const existingUser = yield prisma.usuarios.findUnique({ where: { correo } });
        if (existingUser) {
            return res.status(401).json({ message: 'El correo ya está registrado' });
        }
        // Validar documento único
        const existingDocumento = yield prisma.usuarios.findUnique({ where: { documento } });
        if (existingDocumento) {
            return res.status(401).json({ message: 'El documento ya está registrado' });
        }
        const newUser = yield prisma.usuarios.create({
            data: {
                correo,
                nombre,
                apellido,
                documento,
                contrasenia: hashedPassword,
                tipo_usuario: role,
            },
        });
        let roleData;
        if (role === 'medico') {
            const { matricula, especialidad } = userData;
            roleData = yield prisma.medicos.create({
                data: {
                    matricula,
                    especialidad,
                    usuario_id: newUser.id,
                },
            });
        }
        else if (role === 'paciente') {
            roleData = yield prisma.pacientes.create({
                data: {
                    usuario_id: newUser.id,
                },
            });
        }
        else if (role === 'secretario') {
            roleData = yield prisma.secretarios.create({
                data: {
                    usuario_id: newUser.id,
                },
            });
        }
        else {
            return res.status(400).json({ message: 'Rol no válido' });
        }
        const responseData = (0, bigint_helper_1.convertBigIntToString)(Object.assign(Object.assign({}, newUser), roleData));
        res.status(201).json({
            message: `${role} registrado exitosamente`,
            data: responseData
        });
    }
    catch (error) {
        res.status(500).json({ message: `Error al crear ${role}`, error: error.message });
    }
});
exports.default = {
    getUsers: getAll(user_service_1.default),
    getUserById: getById(user_service_1.default),
    createSecretary: createUserWithRole('secretario'),
    createPatient: createUserWithRole('paciente'),
    createDoctor: createUserWithRole('medico'),
    updateUser: update(user_service_1.default),
    deleteUser: remove(user_service_1.default),
};
