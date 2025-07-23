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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_service_1 = require("../services/auth.service");
const bigint_helper_1 = require("../helpers/bigint.helper");
;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, contrasenia } = req.body;
    if (!correo || !contrasenia) {
        res.status(400).json({ message: 'Correo y contraseña son requeridos' });
        return;
    }
    try {
        const user = yield (0, auth_service_1.validateUserCredentials)(correo, contrasenia);
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, nombre: user.nombre }, 'token_secreto', { expiresIn: '1h' });
        const response = {
            message: 'Inicio de sesión exitoso',
            user,
            token
        };
        res.cookie('llave', token, { httpOnly: true, secure: true });
        res.status(200).json((0, bigint_helper_1.convertBigIntToString)(response));
    }
    catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
        return;
    }
});
const authUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        res.status(401).json({ message: 'Usuario no autenticado' });
        return;
    }
    const response = {
        message: 'Se obtuvieron los datos',
        user: req.user
    };
    res.status(200).json((0, bigint_helper_1.convertBigIntToString)(response));
    return;
});
exports.default = {
    loginUser,
    authUserData,
};
