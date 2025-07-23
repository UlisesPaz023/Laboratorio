"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = __importDefault(require("../services/order.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getOrders: base_controller_1.default.getAll(order_service_1.default),
    getOrderById: base_controller_1.default.getById(order_service_1.default),
    createNewOrder: base_controller_1.default.create(order_service_1.default),
    updateOrder: base_controller_1.default.update(order_service_1.default),
    deleteOrder: base_controller_1.default.remove(order_service_1.default),
};
