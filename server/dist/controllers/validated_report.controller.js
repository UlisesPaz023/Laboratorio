"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validated_report_service_1 = __importDefault(require("../services/validated_report.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getValidatedReports: base_controller_1.default.getAll(validated_report_service_1.default),
    getValidatedReportById: base_controller_1.default.getById(validated_report_service_1.default),
    createNewValidatedReport: base_controller_1.default.create(validated_report_service_1.default),
    updateValidatedReport: base_controller_1.default.update(validated_report_service_1.default),
    deleteValidatedReport: base_controller_1.default.remove(validated_report_service_1.default),
};
