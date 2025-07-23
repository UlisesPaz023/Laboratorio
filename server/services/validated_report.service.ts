import { PrismaClient, informesvalidados } from '../generated/prisma';

const prisma = new PrismaClient();

const fetchAll = async (): Promise<informesvalidados[]> => {
  return await prisma.informesvalidados.findMany();
};

const fetchById = async (id: bigint): Promise<informesvalidados | null> => {
  return await prisma.informesvalidados.findUnique({ where: { id } });
};

const fetchByField = async (field: Partial<informesvalidados>): Promise<informesvalidados | null> => {
  return await prisma.informesvalidados.findFirst({ where: field });
};

const create = async (data: Omit<informesvalidados, 'id'>): Promise<informesvalidados> => {
  return await prisma.informesvalidados.create({ data });
};

const update = async (data: Partial<informesvalidados>, id: bigint): Promise<informesvalidados | null> => {
  return await prisma.informesvalidados.update({ where: { id }, data });
};

const remove = async (id: bigint): Promise<informesvalidados | null> => {
  return await prisma.informesvalidados.delete({ where: { id } });
};

export default {
  fetchAll,
  fetchById,
  fetchByField,
  create,
  update,
  remove,
};