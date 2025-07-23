import cashDayService from '../services/cashday.service';
import baseController from '../utils/base.controller';

export default {
  getCashes: baseController.getAll(cashDayService),
  getCashById: baseController.getById(cashDayService),
  createNewCash: baseController.create(cashDayService),
  updateCash: baseController.update(cashDayService),
  deleteCash: baseController.remove(cashDayService),
};