"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const validateRole_middleware_1 = __importDefault(require("../middlewares/validateRole.middleware"));
const validateUser_middleware_1 = require("../middlewares/validateUser.middleware");
const { getUsers, getUserById, createSecretary, createPatient, createDoctor, updateUser, deleteUser, } = user_controller_1.default;
const route = (0, base_route_1.default)();
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
route.get('/get-users', asyncHandler(getUsers));
route.get('/get-user/:id', asyncHandler(getUserById));
route.delete('/delete-user/:id', validateToken_middleware_1.default, asyncHandler(deleteUser));
route.post('/create-secretary', validateUser_middleware_1.validateCreateSecretary, asyncHandler(createSecretary));
route.post('/create-patient', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), validateUser_middleware_1.validateCreatePatient, asyncHandler(createPatient));
route.post('/create-doctor', validateToken_middleware_1.default, (0, validateRole_middleware_1.default)('secretario'), validateUser_middleware_1.validateCreateDoctor, asyncHandler(createDoctor));
route.patch('/update-user', asyncHandler(updateUser));
exports.default = route;
