import { PrismaClient, muestras, } from '../generated/prisma';

const prisma = new PrismaClient();

const fetchAll = async (): Promise<muestras[]> => {
  return await prisma.muestras.findMany({
    include: {
      pacientes: {
        select: { usuarios: { select: { nombre: true, apellido: true } } },
      },
      informe: true,
    },
  });
};

const fetchByPatientId = async (id_paciente: bigint): Promise<muestras[]> => {
  return await prisma.muestras.findMany({
    where: { id_paciente },
    include: {
      pacientes: {
        select: {
          usuarios: {
            select: {
              nombre: true,
              apellido: true,
            },
          },
        },
      },
      informe: true, // si querés incluir también el informe
    },
  });
};

const fetchById = async (id: bigint): Promise<muestras | null> => {
  return await prisma.muestras.findUnique({ where: { id } });
};

const fetchByField = async (field: Partial<muestras>): Promise<muestras | null> => {
  return await prisma.muestras.findFirst({ where: field });
};

const create = async (data: Omit<muestras, 'id'>): Promise<muestras> => {
  const newReport = await prisma.informes.create({
    data:{
      tipo_informe: '',
      descripcion: '',
      fecha_creacion: new Date(),
    }
  });

  const newSample = await prisma.muestras.create({ 
    data:{
      ...data,
      id_informe: newReport.id,
    }
  });

  await prisma.caja.create({
    data:{
      tipo_transaccion: 'ingreso',
      categoria: 'analisis',
      monto: newSample.monto,
      fecha_transaccion: new Date(),
      descripcion: '',
      id_muestra: newSample.id,
    }
  });

  return newSample;
};


const update = async (data: Partial<muestras>, id: bigint): Promise<muestras | null> => {
  return await prisma.muestras.update({ where: { id }, data });
};

const remove = async (id: bigint): Promise<muestras | null> => {
  return await prisma.muestras.delete({ where: { id } });
};

export default {
  fetchAll,
  fetchByPatientId,
  fetchById,
  fetchByField,
  create,
  update,
  remove,
};