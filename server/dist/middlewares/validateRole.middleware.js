"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const validateRole = (requiredRole) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: 'Usuario no autenticado' });
            return;
        }
        if (user.tipo_usuario !== requiredRole) {
            res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
            return;
        }
        next();
    };
};
exports.default = validateRole;
