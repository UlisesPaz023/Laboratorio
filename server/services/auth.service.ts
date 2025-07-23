import bcrypt from 'bcrypt';
import { PrismaClient, usuarios } from '../generated/prisma';

const prisma = new PrismaClient();

export const validateUserCredentials = async (
  correo: string,
  contrasenia: string
): Promise<usuarios | null> => {
  const user = await prisma.usuarios.findUnique({ where: { correo} });
  if(!user) return null;

  const isPasswordValid = await bcrypt.compare(contrasenia, user.contrasenia);
  if (!isPasswordValid) return null;

  return user;
};
