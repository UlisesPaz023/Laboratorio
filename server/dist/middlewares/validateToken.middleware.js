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
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
;
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.llave;
    if (!token) {
        res.status(403).json({ message: 'Token no proporcionado', token });
        return;
    }
    ;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'token_secreto');
        const user = yield prisma.usuarios.findUnique({
            where: { id: BigInt(decoded.id) },
        });
        if (!user) {
            res.status(401).json({ message: 'Usuario no encontrado' });
            return;
        }
        ;
        req.user = user;
        next();
    }
    catch (error) {
        console.error("Error al verificar el token:", error.message);
        res.status(403).json({ message: 'Token no valido', error: error.message });
        return;
    }
    ;
});
exports.default = validateToken;
