import createRouter from '../utils/base.route';
import sampleController from '../controllers/sample.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateRole from '../middlewares/validateRole.middleware';

const {
  getSamples,
  getSampleById,
  getSamplesByPatient,
  createNewSample,
  updateSample,
  deleteSample,
} = sampleController;
const route = createRouter();

route.get('/get-samples', validateToken, getSamples);
route.get('/get-sample/:id', validateToken, validateRole('secretario'), getSampleById);
route.patch('/update-sample/:id', validateToken, validateRole('secretario'), updateSample);
route.delete('/delete-sample/:id', validateToken, validateRole('secretario'), deleteSample);
route.post('/create-sample', validateToken, validateRole('secretario'), createNewSample);
route.get('/get-samples-by-patient/:id', getSamplesByPatient);

export default route;