import sampleService from '../services/sample.service';
import baseController from '../utils/base.controller';
import { Request, Response } from 'express';

const createNewSample = async (req: Request, res: Response) => {
  try {
    const { fecha_entrega, ...rest } = req.body;

    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('/');
      return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    };

    const data = {
      ...rest,
      fecha_entrega: parseDate(fecha_entrega),
    };

    const sample = await sampleService.create(data);
    res.status(201).json({ message: "Muestra creada correctamente", data: sample });
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear muestra", error: error.message });
  }
};

const getSamplesByPatient = async (req: Request, res: Response) => {
  try {
    const id = BigInt(req.params.id); // Asegurarse de convertirlo
    const samples = await sampleService.fetchByPatientId(id);
    res.status(200).json({ message: "Muestras del paciente", data: samples });
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener muestras del paciente", error: error.message });
  }
};

export default {
  getSamples: baseController.getAll(sampleService),
  getSampleById: baseController.getById(sampleService),
  getSamplesByPatient,
  createNewSample,
  updateSample: baseController.update(sampleService),
  deleteSample: baseController.remove(sampleService),
};