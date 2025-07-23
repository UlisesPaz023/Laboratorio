import createRouter from '../utils/base.route';
import cashController from '../controllers/cash.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateRole from '../middlewares/validateRole.middleware';

const {
  getCashes,
  getCashById,
  createNewCash,
  updateCash,
  deleteCash,
} = cashController;
const route = createRouter();

route.get('/get-cashes', validateToken, validateRole('secretario'), getCashes);
route.get('/get-cash/:id', validateToken, validateRole('secretario'), getCashById);
route.patch('/update-cash/:id', validateToken, validateRole('secretario'), updateCash);
route.delete('/delete-cash/:id', validateToken, validateRole('secretario'), deleteCash);
route.post('/create-cash', validateToken, validateRole('secretario'), createNewCash);

export default route;