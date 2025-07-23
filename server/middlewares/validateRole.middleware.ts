import { Request, Response, NextFunction } from "express";
import { usuarios } from "../generated/prisma";

interface AuthenticatedRequest extends Request {
  user?: usuarios;
};

const validateRole = (requiredRole: string) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
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

export default validateRole;