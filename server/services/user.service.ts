import { PrismaClient, usuarios } from '../generated/prisma';

const prisma = new PrismaClient();

const fetchAll = async (): Promise<usuarios[]> => {
  return await prisma.usuarios.findMany();
};

const fetchAllDoctors = async () => {
  return await prisma.usuarios.findMany({
    where:{tipo_usuario:'medico'},
    include:{
      medicos: true,
    },
  });
};

const fetchAllPatients = async () => {
  return await prisma.usuarios.findMany({
    where:{tipo_usuario:'paciente'},
    include: {
      pacientes: true,
    }
  });
};

const fetchById = async (id: bigint): Promise<usuarios | null> => {
  return await prisma.usuarios.findUnique({ where: { id } });
};

const fetchByField = async (field: Partial<usuarios>): Promise<usuarios | null> => {
  return await prisma.usuarios.findFirst({ where: field });
};

const create = async (data: Omit<usuarios, 'id'>): Promise<usuarios> => {
  return await prisma.usuarios.create({ data });
};

const update = async (data: Partial<usuarios>, id: bigint): Promise<usuarios | null> => {
  return await prisma.usuarios.update({ where: { id }, data });
};

const updatePatient = async (
  userId: bigint,
  userData: Partial<usuarios>,
  patientData: { telefono?: string; fecha_nacimiento?: Date }
): Promise<usuarios | null> => {
  console.log('hola')
  const updatedUser = await prisma.usuarios.update({
    where: { id: userId },
    data: userData,
  });

  // Actualiza paciente (si hay datos)
  if (patientData && (patientData.telefono !== undefined || patientData.fecha_nacimiento !== undefined)) {
    await prisma.pacientes.update({
      where: { usuario_id: userId },
      data: patientData,
    });
  }

  return updatedUser;
};


const remove = async (id: bigint): Promise<usuarios | null> => {
  return await prisma.usuarios.delete({ where: { id } });
};

export default {
  fetchAll,
  fetchAllPatients,
  fetchAllDoctors,
  fetchById,
  fetchByField,
  create,
  update,
  updatePatient,
  remove,
};