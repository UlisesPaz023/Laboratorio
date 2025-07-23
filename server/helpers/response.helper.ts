import { Response } from "express";

const successResponse = <T>(res: Response, data: T, message = 'Operación exitosa') => {
  res.status(200).json({ message, data });
  return;
};

const errorResponse = (res: Response, error: any, message = 'Ocurrió un error') => {
  res.status(500).json({ message, error: error?.message ?? error});
  return;
};

const unauthorizedResponse = (res: Response, message = 'Credenciales inválidas') => {
  res.status(401).json({ message });
  return;
};

export default {
  successResponse,
  errorResponse,
  unauthorizedResponse,
};