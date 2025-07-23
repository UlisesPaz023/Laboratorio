"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = (res, data, message = 'Operación exitosa') => {
    res.status(200).json({ message, data });
    return;
};
const errorResponse = (res, error, message = 'Ocurrió un error') => {
    var _a;
    res.status(500).json({ message, error: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error });
    return;
};
const unauthorizedResponse = (res, message = 'Credenciales inválidas') => {
    res.status(401).json({ message });
    return;
};
exports.default = {
    successResponse,
    errorResponse,
    unauthorizedResponse,
};
