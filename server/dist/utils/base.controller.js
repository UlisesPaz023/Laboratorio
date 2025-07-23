"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_helper_1 = __importDefault(require("../helpers/response.helper"));
const getAll = (service) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.fetchAll();
        return response_helper_1.default.successResponse(res, data, 'Datos obtenidos exitosamente');
    }
    catch (error) {
        return response_helper_1.default.errorResponse(res, error, 'Error al obtener los datos');
    }
});
const getById = (service) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const numericId = BigInt(id);
        const data = yield service.fetchById(numericId);
        if (!data) {
            res.status(404).json({ message: 'No encontrado' });
            return;
        }
        return response_helper_1.default.successResponse(res, data, 'Datos obtenidos exitosamente');
    }
    catch (error) {
        return response_helper_1.default.errorResponse(res, error, 'Error al obtener los datos');
    }
});
const create = (service) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newData = yield service.create(data);
        return response_helper_1.default.successResponse(res, newData, 'Creado exitosamente');
    }
    catch (error) {
        return response_helper_1.default.errorResponse(res, error, 'Error al crear');
    }
});
const update = (service) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const numericId = BigInt(id);
        const data = req.body;
        const updatedData = yield service.update(data, numericId);
        return response_helper_1.default.successResponse(res, updatedData, 'Actualizado exitosamente');
    }
    catch (error) {
        return response_helper_1.default.errorResponse(res, error, 'Error al editar');
    }
});
const remove = (service) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const numericId = BigInt(id);
        const deletedData = yield service.remove(numericId);
        if (!deletedData) {
            res.status(404).json({ message: 'No encontrado' });
            return;
        }
        return response_helper_1.default.successResponse(res, deletedData, 'Eliminado exitosamente');
    }
    catch (error) {
        return response_helper_1.default.errorResponse(res, error, 'Error al eliminar');
    }
});
exports.default = {
    getAll,
    getById,
    create,
    update,
    remove,
};
