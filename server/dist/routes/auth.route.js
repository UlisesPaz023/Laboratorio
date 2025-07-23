"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = __importDefault(require("../utils/base.route"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const { loginUser, authUserData } = auth_controller_1.default;
const route = (0, base_route_1.default)();
route.post('/login', loginUser);
route.get('/verify-token', authUserData);
exports.default = route;
