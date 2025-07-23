import { PrismaClient, caja } from '../generated/prisma';

const prisma = new PrismaClient();

const fetchAll = async ():Promise<caja[]> => {
  return await prisma.caja.findMany();
};

const fetchById = async (id: bigint):Promise<caja | null> => {
  return await prisma.caja.findUnique({ where: { id } });
};

const fetchByField = async (field: Partial<caja>):Promise<caja | null> => {
  return await prisma.caja.findFirst({ where: field });
};

const create = async (data: Omit<caja, 'id'>):Promise<caja> => {
  return await prisma.caja.create({ data });
};

const update = async (data: Partial<caja>, id: bigint):Promise<caja | null> => {
  return await prisma.caja.update({where: {id}, data});
};

const remove = async (id: bigint):Promise<caja | null> => {
  return await prisma.caja.delete({ where: { id } });
};

export default {
  fetchAll,
  fetchById,
  fetchByField,
  create,
  update,
  remove,
};