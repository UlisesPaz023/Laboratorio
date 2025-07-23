"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cash_service_1 = __importDefault(require("../services/cash.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getCashes: base_controller_1.default.getAll(cash_service_1.default),
    getCashById: base_controller_1.default.getById(cash_service_1.default),
    createNewCash: base_controller_1.default.create(cash_service_1.default),
    updateCash: base_controller_1.default.update(cash_service_1.default),
    deleteCash: base_controller_1.default.remove(cash_service_1.default),
};
