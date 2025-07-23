import createRouter from '../utils/base.route';
import materialController from '../controllers/material.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateRole from '../middlewares/validateRole.middleware';

const {
  getMaterials,
  getMaterialById,
  createNewMaterial,
  updateMaterial,
  deleteMaterial,
} = materialController;

const route = createRouter();

route.get('/get-materials', validateToken, getMaterials);
route.get('/get-material/:id', validateToken, validateRole('secretario'), getMaterialById);
route.patch('/update-material/:id', validateToken, validateRole('secretario'), updateMaterial);
route.delete('/delete-material/:id', validateToken, validateRole('secretario'), deleteMaterial);
route.post('/create-material', validateToken, validateRole('secretario'), createNewMaterial);

export default route;
