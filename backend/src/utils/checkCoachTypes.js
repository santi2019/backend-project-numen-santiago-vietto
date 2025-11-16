const { body, validationResult } = require("express-validator");

const checkCoachTypes = [
    body("firstName")
        .isString()
        .withMessage("firstName debe ser un string."),

    body("lastName")
        .isString()
        .withMessage("lastName debe ser un string."),

    body("nationality")
        .isString()
        .withMessage("nationality debe ser un string."),

    body("age")
        .isNumeric()
        .withMessage("age debe ser un number."),

    body("birthDate")
        .isDate({ format: "YYYY-MM-DD", strictMode: true })
        .withMessage("El formato de birthDate debe ser YYYY-MM-DD."),

    body("totalTitles")
        .isNumeric()
        .withMessage("totalTitles debe ser un number."),
        
    body("currentClub")
        .isString()
        .withMessage("currentClub debe ser un string."),

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

module.exports = checkCoachTypes;
