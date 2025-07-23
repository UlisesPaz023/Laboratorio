import { PrismaClient, materiales } from "../generated/prisma";

const prisma = new PrismaClient();

const fetchAll = async (): Promise<materiales[]> => {
  return await prisma.materiales.findMany();
};

const fetchById = async (id: bigint): Promise<materiales | null> => {
  return await prisma.materiales.findUnique({where: {id}});
};

const fetchByField = async (field: Partial<materiales>): Promise<materiales | null> => {
  return await prisma.materiales.findFirst({where: field});
};

const create = async (data: Omit<materiales, "id">): Promise<materiales> => {
  return await prisma.materiales.create({data});
};

const update = async (data: Partial<materiales>, id: bigint): Promise<materiales | null> => {
  return await prisma.materiales.update({where: {id}, data});
};

const remove = async (id: bigint): Promise<materiales | null> => {
  return await prisma.materiales.delete({where: {id}});
};

export default {
  fetchAll,
  fetchById,
  fetchByField,
  create,
  update,
  remove,
};