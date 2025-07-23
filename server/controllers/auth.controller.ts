import jwt from 'jsonwebtoken';
import { validateUserCredentials } from '../services/auth.service';
import { Request, Response } from 'express';
import { usuarios } from '../generated/prisma';
import { convertBigIntToString } from '../helpers/bigint.helper';

declare module 'express-serve-static-core' {
  interface Request {
    user?: usuarios,
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { correo, contrasenia } = req.body;
  if (!correo || !contrasenia) {
    res.status(400).json({ message: 'Correo y contraseña son requeridos' });
    return;
  }

  try {
    const user = await validateUserCredentials(correo, contrasenia);
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    const token = jwt.sign({ id: user.id, nombre: user.nombre }, 'token_secreto', { expiresIn: '1h' });

    const response = {
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        nombre: user.nombre,
        tipo_usuario: user.tipo_usuario,
      },
      token
    };
    res.cookie('llave', token, { httpOnly: true, secure: true });
    res.status(200).json(convertBigIntToString(response));
  } catch (error: any) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
    return;
  }
};

const authUserData = async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401).json({ message: 'Usuario no autenticado' });
    return;
  }

  const response = {
    message: 'Se obtuvieron los datos',
    user: req.user
  };
  res.status(200).json(convertBigIntToString(response));
  return;
};

const logoutUser = async (req: Request, res: Response) => {
  try {    
    res.clearCookie('llave');
    res.status(200).json({ message: 'Se elimino el token correctamente' });
  } catch (error:any) {
    res.status(500).json({ message: 'Error en el servidor' });
  };
};

export default {
  loginUser,
  authUserData,
  logoutUser,
};