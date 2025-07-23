import createRouter from '../utils/base.route';
import validatedReportController from '../controllers/validated_report.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateRole from '../middlewares/validateRole.middleware';

const {
  getValidatedReports,
  getValidatedReportById,
  createNewValidatedReport,
  updateValidatedReport,
  deleteValidatedReport,
} = validatedReportController;
const route = createRouter();

route.get('/get-v-reports', validateToken, validateRole('secretario'), getValidatedReports);
route.get('/get-v-report/:id', validateToken, validateRole('secretario'), getValidatedReportById);
route.patch('/update-v-report/:id', validateToken, validateRole('medico'), updateValidatedReport);
route.delete('/delete-v-report/:id', validateToken, validateRole('secretario'), deleteValidatedReport);
route.post('/create-v-report', validateToken, validateRole('medico'), createNewValidatedReport);

export default route;
