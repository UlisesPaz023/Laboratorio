"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sample_service_1 = __importDefault(require("../services/sample.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getSamples: base_controller_1.default.getAll(sample_service_1.default),
    getSampleById: base_controller_1.default.getById(sample_service_1.default),
    createNewSample: base_controller_1.default.create(sample_service_1.default),
    updateSample: base_controller_1.default.update(sample_service_1.default),
    deleteSample: base_controller_1.default.remove(sample_service_1.default),
};
