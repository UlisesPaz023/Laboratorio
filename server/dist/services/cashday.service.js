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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const fetchAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.cierres_caja.findMany();
});
const fetchById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.cierres_caja.findUnique({ where: { id } });
});
const fetchByField = (field) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.cierres_caja.findFirst({ where: field });
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.cierres_caja.create({ data });
});
const update = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.cierres_caja.update({ where: { id }, data });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.cierres_caja.delete({ where: { id } });
});
exports.default = {
    fetchAll,
    fetchById,
    fetchByField,
    create,
    update,
    remove,
};
