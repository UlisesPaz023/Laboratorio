"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const benefit_service_1 = __importDefault(require("../services/benefit.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getBenefits: base_controller_1.default.getAll(benefit_service_1.default),
    getBenefitById: base_controller_1.default.getById(benefit_service_1.default),
    createNewBenefit: base_controller_1.default.create(benefit_service_1.default),
    updateBenefit: base_controller_1.default.update(benefit_service_1.default),
    deleteBenefit: base_controller_1.default.remove(benefit_service_1.default),
};
