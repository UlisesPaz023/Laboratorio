import { PrismaClient, cierres_caja } from '../generated/prisma';

const prisma = new PrismaClient();

const fetchAll = async ():Promise<cierres_caja[]> => {
  return await prisma.cierres_caja.findMany();
};

const fetchById = async (id: bigint):Promise<cierres_caja | null> => {
  return await prisma.cierres_caja.findUnique({ where: { id } });
};

const fetchByField = async (field: Partial<cierres_caja>):Promise<cierres_caja | null> => {
  return await prisma.cierres_caja.findFirst({ where: field });
};

const create = async (data: Omit<cierres_caja, 'id'>):Promise<cierres_caja> => {
  return await prisma.cierres_caja.create({ data });
};

const update = async (data: Partial<cierres_caja>, id: bigint):Promise<cierres_caja | null> => {
  return await prisma.cierres_caja.update({where: {id}, data});
};

const remove = async (id: bigint):Promise<cierres_caja | null> => {
  return await prisma.cierres_caja.delete({ where: { id } });
};

export default {
  fetchAll,
  fetchById,
  fetchByField,
  create,
  update,
  remove,
};