const { body, validationResult } = require("express-validator");

const checkTeamTypes = [
    body("name")
        .isString()
        .withMessage("name debe ser un string."),

    body("location")
        .isString()
        .withMessage("location debe ser un string."),

    body("competitions")
        .isArray()
        .withMessage("competitions debe ser un array."),

    body("stadium")
        .isString()
        .withMessage("stadium debe ser un string."),

    body("established")
        .isNumeric()
        .withMessage("established debe ser un number."),


    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statuscode: 400,
                massage: "Error en los campos ingresados:",
                arrayOfValidation: errors.array().map(err => err.msg)
            });
        }

        next();
    }
];

module.exports = checkTeamTypes;
