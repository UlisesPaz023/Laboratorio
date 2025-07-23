import createRouter from '../utils/base.route';
import userController from '../controllers/user.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateRole from '../middlewares/validateRole.middleware';
import {
  validateCreateSecretary,
  validateCreatePatient,
  validateCreateDoctor,
} from '../middlewares/validateUser.middleware';

const {
  getUsers,
  getUserById,
  createSecretary,
  createPatient,
  createDoctor,
  updateUser,
  deleteUser,
  getPatients,
  getDoctors,
  updatePatient,
} = userController;
const route = createRouter();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

route.get('/get-users', asyncHandler(getUsers));
route.get('/get-user/:id', asyncHandler(getUserById));
route.delete('/delete-user/:id', validateToken, asyncHandler(deleteUser));
route.post('/create-secretary', validateCreateSecretary, asyncHandler(createSecretary));
route.post('/create-patient', validateToken, validateRole('secretario'), validateCreatePatient, asyncHandler(createPatient));
route.post('/create-doctor', validateToken, validateRole('secretario'), validateCreateDoctor, asyncHandler(createDoctor));
route.patch('/update-user/:id', validateToken, validateRole('secretario'), asyncHandler(updateUser));
route.get('/get-patients', validateToken, asyncHandler(getPatients));
route.get('/get-doctors', validateToken, asyncHandler(getDoctors));
route.patch('/update-patient/:id', validateToken, validateRole('secretario'), asyncHandler(updatePatient));

export default route;