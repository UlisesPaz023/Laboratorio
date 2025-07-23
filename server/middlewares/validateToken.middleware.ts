import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient, usuarios } from '../generated/prisma';

const prisma = new PrismaClient();

declare module 'express-serve-static-core' {
  interface Request { 
    user?: usuarios;
  }
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.llave;
  
  if (!token) {
    res.status(403).json({ message: 'Token no proporcionado', token });
    return;
  };

  try {
    const decoded: any = jwt.verify(token, 'token_secreto') as { id: string | number };
    const user = await prisma.usuarios.findUnique({
      where: { id: BigInt(decoded.id) },
  });

    if (!user) {
      res.status(401).json({ message: 'Usuario no encontrado' });
      return;
    };

    req.user = user;
    next();
  } catch (error: any) {
    console.error("Error al verificar el token:", error.message);
    res.status(403).json({ message: 'Token no valido', error: error.message });
    return;
  };
};

export default validateToken;
