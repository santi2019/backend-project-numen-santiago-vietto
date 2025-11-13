const checkPlayerTypes = (request, response, next) => {
    const player = request.body;

    const arrayOfValidation = [];

    if (typeof player.firstName !== "string") arrayOfValidation.push("firstName debe ser un string.");
    if (typeof player.lastName !== "string") arrayOfValidation.push("lastName debe ser un string.");
    if (typeof player.gender !== "string") arrayOfValidation.push("gender debe ser un string.");
    if (typeof player.nationality !== "string") arrayOfValidation.push("nationality debe ser unstring.");
    if (typeof player.position !== "string") arrayOfValidation.push("position debe ser un string.");
    if (typeof player.status !== "string") arrayOfValidation.push("status debe ser un string.");
    if (typeof player.club !== "string") arrayOfValidation.push("club debe ser un string.");


    if (typeof player.age !== "number") arrayOfValidation.push("age debe ser un number.");
    if (typeof player.teamNumber !== "number") arrayOfValidation.push("teamNumber debe ser un number.");
    if (typeof player.height_cm !== "number") arrayOfValidation.push("height debe ser un number.");
    if (typeof player.weight_kg !== "number") arrayOfValidation.push("weight debe ser un number.");
    if (typeof player.totalGoals !== "number") arrayOfValidation.push("totalGoals debe ser un number.");
    if (typeof player.total_red_cards !== "number") arrayOfValidation.push("total_red_cards debe ser un number.");
    if (typeof player.total_yellow_cards !== "number") arrayOfValidation.push("total_yellow_cards debe ser un number.");
    if (typeof player.total_match_played !== "number") arrayOfValidation.push("total_match_played debe ser un number.");

    if (!player.birthDate || isNaN(Date.parse(player.birthDate))) arrayOfValidation.push("El formato de birthDate debe ser YYYY-MM-DD.");

    const validGenders = ["M", "F"];
    if (player.gender && !validGenders.includes(player.gender)) arrayOfValidation.push("gender debe ser 'M' or 'F'.");

    const validStatuses = ["Activo", "Lesionado", "Retirado"];
    if (player.status && !validStatuses.includes(player.status)) arrayOfValidation.push("status debe ser 'Activo', 'Lesionado' or 'Retirado'.");

    const validPositions = ["Delantero", "Mediocampista", "Defensor", "Arquero"];
    if (player.position && !validPositions.includes(player.position)) arrayOfValidation.push("position debe ser 'Delantero', 'Mediocampista', 'Defensor' o 'Arquero'.");

    
    if(arrayOfValidation.length > 0){
        return response.json({
            statuscode: 400,
            massage: "Error en los campos ingresados: ",
            arrayOfValidation
        })
    }

    next();
}


module.exports = checkPlayerTypes;