"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateDoctor = exports.validateCreatePatient = exports.validateCreateSecretary = void 0;
const express_validator_1 = require("express-validator");
const createValidationMiddleware = (fields) => {
    const validations = Object.entries(fields).map(([field, rules]) => {
        let validator = (0, express_validator_1.body)(field);
        rules.forEach((rule, idx) => {
            validator = validator[rule.method](...rule.args).withMessage(rule.message);
            if (idx < rules.length - 1) {
                validator = validator.bail();
            }
            ;
        });
        return validator;
    });
    return [
        ...validations,
        (req, res, next) => {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            next();
        },
    ];
};
const commonValidations = {
    correo: [
        { method: 'isEmail', args: [], message: 'El correo debe tener un formato válido' },
    ],
    contrasenia: [
        { method: 'isLength', args: [{ min: 6 }], message: 'La contraseña debe tener al menos 6 caracteres' },
        { method: 'matches', args: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/], message: 'La contraseña debe incluir mayúsculas, minúsculas y números' },
    ],
    nombre: [
        { method: 'isString', args: [], message: 'El nombre debe ser una cadena de texto' },
        { method: 'notEmpty', args: [], message: 'El nombre es obligatorio' },
    ],
    apellido: [
        { method: 'isString', args: [], message: 'El apellido debe ser una cadena de texto' },
        { method: 'notEmpty', args: [], message: 'El apellido es obligatorio' },
    ],
    documento: [
        { method: 'isInt', args: [], message: 'El documento debe ser numérico sin puntos ni comas' },
        { method: 'notEmpty', args: [], message: 'El documento es obligatorio' },
    ],
};
exports.validateCreateSecretary = createValidationMiddleware(Object.assign({}, commonValidations));
exports.validateCreatePatient = createValidationMiddleware(Object.assign({}, commonValidations));
exports.validateCreateDoctor = createValidationMiddleware(Object.assign(Object.assign({}, commonValidations), { matricula: [
        { method: 'notEmpty', args: [], message: 'La matrícula es obligatoria' },
    ] }));
