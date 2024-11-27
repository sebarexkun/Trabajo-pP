const { validationResult } = require('express-validator');

// Middleware para manejar validaciones
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Si no hay errores, continúa al siguiente middleware o controlador
};

module.exports = validateRequest;