import { body, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

type Rule = {
  method: string;
  args: any[];
  message: string;
};

type ValidationFields = {
  [key: string]: Rule[];
};

const createValidationMiddleware = (fields: ValidationFields) => {
  const validations: ValidationChain[] = Object.entries(fields).map(([field, rules]) => {
    let validator = body(field);
    rules.forEach((rule, idx) => {
      validator = (validator as any)[rule.method](...rule.args).withMessage(rule.message);
      if (idx < rules.length - 1) {
        validator = validator.bail();
      };
    });
    return validator;
  });

  return [
    ...validations,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }
      next();
    },
  ];
};

const commonValidations: ValidationFields = {
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

export const validateCreateSecretary = createValidationMiddleware({
  ...commonValidations,
});

export const validateCreatePatient = createValidationMiddleware({
  ...commonValidations,
});

export const validateCreateDoctor = createValidationMiddleware({
  ...commonValidations,
  matricula: [
    { method: 'notEmpty', args: [], message: 'La matrícula es obligatoria' },
  ],
});
