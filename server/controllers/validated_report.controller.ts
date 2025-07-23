import validatedReportService from '../services/validated_report.service';
import baseController from '../utils/base.controller';

export default {
  getValidatedReports: baseController.getAll(validatedReportService),
  getValidatedReportById: baseController.getById(validatedReportService),
  createNewValidatedReport: baseController.create(validatedReportService),
  updateValidatedReport: baseController.update(validatedReportService),
  deleteValidatedReport: baseController.remove(validatedReportService),
};