"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_service_1 = __importDefault(require("../services/material.service"));
const base_controller_1 = __importDefault(require("../utils/base.controller"));
exports.default = {
    getMaterials: base_controller_1.default.getAll(material_service_1.default),
    getMaterialById: base_controller_1.default.getById(material_service_1.default),
    createNewMaterial: base_controller_1.default.create(material_service_1.default),
    updateMaterial: base_controller_1.default.update(material_service_1.default),
    deleteMaterial: base_controller_1.default.remove(material_service_1.default),
};
