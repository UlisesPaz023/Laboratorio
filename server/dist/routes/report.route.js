"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const report_controller_1 = __importDefault(require("../controllers/report.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getReports, getReportById, createNewReport, updateReport, deleteReport, } = report_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-reports', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getReports);
route.get('/get-report/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getReportById);
route.patch('/update-report/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), updateReport);
route.delete('/delete-report/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteReport);
route.post('/create-report', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), createNewReport);
exports.default = route;
