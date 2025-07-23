"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const report_service_1 = __importDefault(require("../services/report.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getReports: base_controller_1.default.getAll(report_service_1.default),
    getReportById: base_controller_1.default.getById(report_service_1.default),
    createNewReport: base_controller_1.default.create(report_service_1.default),
    updateReport: base_controller_1.default.update(report_service_1.default),
    deleteReport: base_controller_1.default.remove(report_service_1.default),
};
