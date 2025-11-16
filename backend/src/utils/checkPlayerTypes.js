const { body, validationResult } = require("express-validator");

const validGenders = ["M", "F"];
const validStatuses = ["Activo", "Lesionado", "Retirado"];
const validPositions = ["Delantero", "Mediocampista", "Defensor", "Arquero"];

const checkPlayerTypes = [
    body("firstName")
        .isString()
        .withMessage("firstName debe ser un string."),

    body("lastName")
        .isString()
        .withMessage("lastName debe ser un string."),

    body("gender")
        .isString()
        .withMessage("gender debe ser un string.")
        .isIn(validGenders)
        .withMessage("gender debe ser 'M' o 'F'."),

    body("nationality")
        .isString()
        .withMessage("nationality debe ser unstring."),

    body("position")
        .isString()
        .withMessage("position debe ser un string.")
        .isIn(validPositions)
        .withMessage("position debe ser 'Delantero', 'Mediocampista', 'Defensor' o 'Arquero'."),

    body("status")
        .isString()
        .withMessage("status debe ser un string.")
        .isIn(validStatuses)
        .withMessage("status debe ser 'Activo', 'Lesionado' o 'Retirado'."),

    body("club")
        .isString()
        .withMessage("club debe ser un string."),

    body("age")
        .isNumeric()
        .withMessage("age debe ser un number."),

    body("teamNumber")
        .isNumeric()
        .withMessage("teamNumber debe ser un number."),

    body("height_cm")
        .isNumeric()
        .withMessage("height debe ser un number."),

    body("weight_kg")
        .isNumeric()
        .withMessage("weight debe ser un number."),

    body("totalGoals")
        .isNumeric()
        .withMessage("totalGoals debe ser un number."),

    body("total_red_cards")
        .isNumeric()
        .withMessage("total_red_cards debe ser un number."),

    body("total_yellow_cards")
        .isNumeric()
        .withMessage("total_yellow_cards debe ser un number."),

    body("total_match_played")
        .isNumeric()
        .withMessage("total_match_played debe ser un number."),

    body("birthDate")
        .isDate({ format: "YYYY-MM-DD", strictMode: true })
        .withMessage("El formato de birthDate debe ser YYYY-MM-DD."),

    // middleware final que arma el mismo JSON que usabas antes
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statuscode: 400,
                massage: "Error en los campos ingresados: ",
                arrayOfValidation: errors.array().map(err => err.msg)
            });
        }

        next();
    }
];

module.exports = checkPlayerTypes;
