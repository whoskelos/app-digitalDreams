const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreate = [
  check("name")
    .exists()
    .not()
    .isEmpty()
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('El nombre solo puede contener letras y espacios en blanco')
    .custom((value, { req }) => {
        if (value.length < 3) {
            throw new Error('Longitud minima de 3 caracteres.');
        }
        return true
    })
    ,
  check("email")
    .exists()
    .isEmail(),
  check("password")
    .exists()
    .isLength( {min: 5} ),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }
