import reportService from '../services/report.service';
import baseController from '../utils/base.controller';

export default{
  getReports: baseController.getAll(reportService),
  getReportById: baseController.getById(reportService),
  createNewReport: baseController.create(reportService),
  updateReport: baseController.update(reportService),
  deleteReport: baseController.remove(reportService),
};