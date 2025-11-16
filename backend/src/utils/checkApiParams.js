const { body, validationResult } = require("express-validator");


const validLeagues = {
    128: "Liga Profesional Argentina",
    131: "Primera Nacional Argentina",
    130: "Copa Argentina",

    71: "Brasileirão Serie A",
    72: "Brasileirão Serie B",
    73: "Copa do Brasil",

    39: "Premier League",
    40: "Championship",
    45: "FA Cup",
    48: "EFL Cup",

    140: "LaLiga",
    141: "LaLiga 2",
    143: "Copa del Rey",

    135: "Serie A",
    136: "Serie B",
    137: "Coppa Italia",

    78: "Bundesliga",
    79: "Bundesliga 2",
    81: "DFB Pokal",

    61: "Ligue 1",
    62: "Ligue 2",
    66: "Coupe de France",

    2: "UEFA Champions League",
    3: "UEFA Europa League",
    848: "UEFA Conference League",
    13: "UEFA Eurocup",
    11: "CONMEBOL Libertadores",
    4: "CONMEBOL Sudamericana",
    9: "Copa Libertadores Femenina",
    1: "FIFA World Cup",

    556: "Supercopa de España / Trophée des Champions"
};

const validSeasons = [2021, 2022, 2023];

const checkApiValidator = [

    body("league")
        .notEmpty()
        .withMessage("league es requerido.")
        .isNumeric()
        .withMessage("league debe ser un number.")
        .isIn(validLeagues)
        .custom(value => {
            if (!validLeagues[value]) {
                const list = Object.entries(validLeagues)
                    .map(([code, name]) => `${code} (${name})`)
                    .join(", ");
                throw new Error(
                    `league debe ser uno de estos valores: ${list}`
                );
            }
            return true;
        }),
    
    body("season")
        .notEmpty()
        .withMessage("season es requerido.")
        .isNumeric()
        .withMessage("season debe ser un number.")
        .isIn(validSeasons)
        .withMessage("season debe ser '2021', '2022' o '2023'."),




    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                statuscode: 400,
                massage: "Error en los parámetros enviados:",
                arrayOfValidation: errors.array().map(err => err.msg)
            });
        }

        next();
    }
];

module.exports = checkApiValidator;
