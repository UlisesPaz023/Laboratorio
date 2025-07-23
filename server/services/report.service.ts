import { PrismaClient, informes } from '../generated/prisma';

const prisma = new PrismaClient();

const fetchAll = async (): Promise<informes[]> => {
  return await prisma.informes.findMany();
};

const fetchById = async (id: bigint): Promise<informes | null> => {
  return await prisma.informes.findUnique({ where: { id } });
};

const fetchByField = async (field: Partial<informes>): Promise<informes | null> => {
  return await prisma.informes.findFirst({ where: field });
};

const create = async (data: Omit<informes, 'id'>): Promise<informes> => {
  return await prisma.informes.create({ data });
};

const update = async (data: Partial<informes>, id: bigint): Promise<informes | null> => {
  return await prisma.informes.update({ where: { id }, data });
};

const remove = async (id: bigint): Promise<informes | null> => {
  return await prisma.informes.delete({ where: { id } });
};

export default {
  fetchAll,
  fetchById,
  fetchByField,
  create,
  update,
  remove,
};