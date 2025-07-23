"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const material_controller_1 = __importDefault(require("../controllers/material.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const { getMaterials, getMaterialById, createNewMaterial, updateMaterial, deleteMaterial, } = material_controller_1.default;
const route = (0, base_route_1.default)();
route.get('/get-materials', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getMaterials);
route.get('/get-material/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), getMaterialById);
route.patch('/update-material/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), updateMaterial);
route.delete('/delete-material/:id', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), deleteMaterial);
route.post('/create-material', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), createNewMaterial);
exports.default = route;
