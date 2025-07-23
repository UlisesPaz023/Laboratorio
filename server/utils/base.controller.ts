import responseHelper from '../helpers/response.helper';
import { Request, Response } from 'express';

interface IService<T> {
  fetchAll: () => Promise<T[]>;
  fetchById: (id: bigint) => Promise<T | null>;
  create: (data: T) => Promise<T>;
  update: (data: T, id: bigint) => Promise<T | null>;
  remove: (id: bigint) => Promise<T | null>;
}

const getAll = <T>(service: IService<T>) => async (req: Request, res: Response) => {
  try {
    const data = await service.fetchAll();
    return responseHelper.successResponse(res, data, 'Datos obtenidosssss exitosamente');
  } catch (error) {
    return responseHelper.errorResponse(res, error, 'Error al obtener los datos');
  }
};

const getById = <T>(service: IService<T>) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numericId = BigInt(id);
    const data = await service.fetchById(numericId);
    if (!data) {
      res.status(404).json({ message: 'No encontrado' });
      return;
    }
    return responseHelper.successResponse(res, data, 'Datos obtenidos exitosamente');
  } catch (error) {
    return responseHelper.errorResponse(res, error, 'Error al obtener los datos');
  }
};

const create = <T>(service: IService<T>) => async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newData = await service.create(data);
    return responseHelper.successResponse(res, newData, 'Creado exitosamente');
  } catch (error) {
    return responseHelper.errorResponse(res, error, 'Error al crear');
  }
};

const update = <T>(service: IService<T>) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numericId = BigInt(id);
    const data = req.body;
    const updatedData = await service.update(data, numericId);
    return responseHelper.successResponse(res, updatedData, 'Actualizado exitosamente');
  } catch (error) {
    return responseHelper.errorResponse(res, error, 'Error al editar');
  }
};

const remove = <T>(service: IService<T>) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numericId = BigInt(id);
    const deletedData = await service.remove(numericId);
    if (!deletedData) {
      res.status(404).json({ message: 'No encontrado' });
      return;
    }
    return responseHelper.successResponse(res, deletedData, 'Eliminado exitosamente');
  } catch (error) {
    return responseHelper.errorResponse(res, error, 'Error al eliminar');
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};