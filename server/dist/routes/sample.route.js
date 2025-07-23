"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const sample_controller_1 = __importDefault(require("../controllers/sample.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getSamples, getSampleById, createNewSample, updateSample, deleteSample, } = sample_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-samples', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getSamples);
route.get('/get-sample/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getSampleById);
route.patch('/update-sample/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), updateSample);
route.delete('/delete-sample/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteSample);
route.post('/create-sample', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), createNewSample);
exports.default = route;
