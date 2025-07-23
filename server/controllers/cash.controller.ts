import cashService from '../services/cash.service';
import baseController from '../utils/base.controller';
import { Request, Response } from 'express';

const createNewCash = async (req: Request, res: Response) => {
  try {
    const { fecha, fecha_transaccion, ...rest } = req.body;

    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('/');
      return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    };

    const data = {
      ...rest,
      fecha: parseDate(fecha),
      fecha_transaccion: parseDate(fecha_transaccion),
    };

    const cash = await cashService.create(data);
    res.status(201).json({ message: "Muestra creada correctamente", data: cash });
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear muestra", error: error.message });
  }
};

export default {
  getCashes: baseController.getAll(cashService),
  getCashById: baseController.getById(cashService),
  createNewCash,
  updateCash: baseController.update(cashService),
  deleteCash: baseController.remove(cashService),
};