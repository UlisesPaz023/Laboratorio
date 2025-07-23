import createRouter from '../utils/base.route';
import reportController from '../controllers/report.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateRole from '../middlewares/validateRole.middleware';

const {
  getReports,
  getReportById,
  createNewReport,
  updateReport,
  deleteReport,
} = reportController;
const route = createRouter();

route.get('/get-reports', validateToken, validateRole('secretario'), getReports);
route.get('/get-report/:id', validateToken, validateRole('secretario'), getReportById);
route.patch('/update-report/:id', validateToken, validateRole('secretario'), updateReport);
route.delete('/delete-report/:id', validateToken, validateRole('secretario'), deleteReport);
route.post('/create-report', validateToken, validateRole('secretario'), createNewReport);

export default route;
