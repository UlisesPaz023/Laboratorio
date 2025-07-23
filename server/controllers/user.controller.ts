import { Request, Response } from 'express';
import baseController from '../utils/base.controller';
import userService from '../services/user.service';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcrypt';
import { convertBigIntToString } from '../helpers/bigint.helper';

const prisma = new PrismaClient();

const {
  getAll,
  getById,
  update,
  remove,
} = baseController;

type Role = 'medico' | 'paciente' | 'secretario';

const createUserWithRole = (role: Role) => async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { correo, nombre, apellido, documento, contrasenia } = userData;
    const hashedPassword = await bcrypt.hash(contrasenia, 10);

    // Validar correo único
    const existingUser = await prisma.usuarios.findUnique({ where: { correo } });
    if (existingUser) {
      return res.status(401).json({ message: 'El correo ya está registrado' });
    }

    // Validar documento único
    const existingDocumento = await prisma.usuarios.findUnique({ where: { documento } });
    if (existingDocumento) {
      return res.status(401).json({ message: 'El documento ya está registrado' });
    }

    const newUser = await prisma.usuarios.create({
      data: {
        correo,
        nombre,
        apellido,
        documento,
        contrasenia: hashedPassword,
        tipo_usuario: role,
      },
    });

    let roleData;
    if (role === 'medico') {
      const { matricula, especialidad } = userData;
      roleData = await prisma.medicos.create({
        data: {
          matricula,
          especialidad,
          usuario_id: newUser.id,
        },
      });
    } else if (role === 'paciente') {
      let fechaNacimientoDate = undefined;
      const { fecha_nacimiento, telefono} = userData;
      if (fecha_nacimiento) {
        const [day, month, year] = userData.fecha_nacimiento.split('/');
        if (day && month && year) {
          fechaNacimientoDate = new Date(`${year}-${month}-${day}`);
        }
      }
      roleData = await prisma.pacientes.create({
        data: {
          usuario_id: newUser.id,
          fecha_nacimiento: fechaNacimientoDate,
          telefono,
        },
      });
    } else if (role === 'secretario') {
      roleData = await prisma.secretarios.create({
        data: {
          usuario_id: newUser.id,
        },
      });
    } else {
      return res.status(400).json({ message: 'Rol no válido' });
    }

    const responseData = convertBigIntToString({ ...newUser, ...roleData });

    res.status(201).json({
      message: `${role} registrado exitosamente`,
      data: responseData
    });
  } catch (error: any) {
    res.status(500).json({ message: `Error al crear ${role}`, error: error.message });
  }
};

const getPatients = async(req: Request, res:Response) => {
  try {
    const patients = await userService.fetchAllPatients();
    res.status(200).json({data: patients});
  } catch (error) {
    res.status(500).json({message:'Error al obtener pacientes'});
  }
};

const getDoctors = async(req: Request, res:Response) => {
  try {
    const doctors = await userService.fetchAllDoctors();
    res.status(200).json({data: doctors});
  } catch (error) {
    res.status(500).json({message:'Error al obtener médicos'});
  }
};

const updatePatient = async (req: Request, res: Response) => {
  try {
    const userId = BigInt(req.params.id);
    const { nombre, apellido, correo, documento, telefono, fecha_nacimiento } = req.body;

    // Prepara los datos para usuarios y pacientes
    const userData: any = { nombre, apellido, correo, documento };
    const patientData: any = {};

    if (telefono !== undefined) patientData.telefono = telefono;
    if (fecha_nacimiento) {
      // Convierte DD/MM/YYYY a Date
      const [day, month, year] = fecha_nacimiento.split('/');
      if (day && month && year) {
        patientData.fecha_nacimiento = new Date(`${year}-${month}-${day}`);
      }
    }

    const updated = await userService.updatePatient(userId, userData, patientData);
    res.status(200).json({ message: 'Paciente actualizado', data: updated });
  } catch (error: any) {
    res.status(500).json({ message: 'Error al actualizar paciente', error: error.message });
  }
};

export default {
  getUsers: getAll(userService),
  getUserById: getById(userService),
  createSecretary: createUserWithRole('secretario'),
  createPatient: createUserWithRole('paciente'),
  createDoctor: createUserWithRole('medico'),
  updateUser: update(userService),
  deleteUser: remove(userService),
  getPatients,
  getDoctors,
  updatePatient,
};