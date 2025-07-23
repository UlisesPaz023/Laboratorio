"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const cashday_controller_1 = __importDefault(require("../controllers/cashday.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getCashes, getCashById, createNewCash, updateCash, deleteCash, } = cashday_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-cashes', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getCashes);
route.get('/get-cash/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getCashById);
route.patch('/update-cash/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), updateCash);
route.delete('/delete-cash/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteCash);
route.post('/create-cash', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), createNewCash);
exports.default = route;
