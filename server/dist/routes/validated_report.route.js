"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const validated_report_controller_1 = __importDefault(require("../controllers/validated_report.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getValidatedReports, getValidatedReportById, createNewValidatedReport, updateValidatedReport, deleteValidatedReport, } = validated_report_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-v-reports', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getValidatedReports);
route.get('/get-v-report/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getValidatedReportById);
route.patch('/update-v-report/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('medico'), updateValidatedReport);
route.delete('/delete-v-report/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteValidatedReport);
route.post('/create-v-report', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('medico'), createNewValidatedReport);
exports.default = route;
