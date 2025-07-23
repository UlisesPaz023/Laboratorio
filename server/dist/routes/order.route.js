"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getOrders, getOrderById, createNewOrder, updateOrder, deleteOrder, } = order_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-orders', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getOrders);
route.get('/get-order/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getOrderById);
route.patch('/update-order/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), updateOrder);
route.delete('/delete-order/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteOrder);
route.post('/create-order', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), createNewOrder);
exports.default = route;
