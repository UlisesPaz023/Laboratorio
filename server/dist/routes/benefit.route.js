"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const benefit_controller_1 = __importDefault(require("../controllers/benefit.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getBenefits, getBenefitById, createNewBenefit, updateBenefit, deleteBenefit, } = benefit_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-benefits', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getBenefits);
route.get('/get-benefit/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getBenefitById);
route.patch('/update-benefit/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), updateBenefit);
route.delete('/delete-benefit/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteBenefit);
route.post('/create-benefit', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), createNewBenefit);
exports.default = route;
