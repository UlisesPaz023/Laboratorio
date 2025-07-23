import materialService from '../services/material.service';
import baseController from '../utils/base.controller';

export default {
  getMaterials: baseController.getAll(materialService),
  getMaterialById: baseController.getById(materialService),
  createNewMaterial: baseController.create(materialService),
  updateMaterial: baseController.update(materialService),
  deleteMaterial: baseController.remove(materialService),
};