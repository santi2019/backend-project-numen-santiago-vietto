const checkCoachTypes = (request, response, next) => {
    const coach = request.body;

    const arrayOfValidation = [];

    if (typeof coach.firstName !== "string") arrayOfValidation.push("firstName debe ser un string.");
    if (typeof coach.lastName !== "string") arrayOfValidation.push("lastName debe ser un string.");
    if (typeof coach.nationality !== "string") arrayOfValidation.push("nationality debe ser unstring.");
    if (typeof coach.age !== "number") arrayOfValidation.push("age debe ser un number.");
    if (!coach.birthDate || isNaN(Date.parse(coach.birthDate))) arrayOfValidation.push("El formato de birthDate debe ser YYYY-MM-DD.");
    if (typeof coach.totalTitles !== "number") arrayOfValidation.push("totalTitles debe ser un number.");
    if (typeof coach.currentClub !== "string") arrayOfValidation.push("currentClub debe ser un string.");

    
    if(arrayOfValidation.length > 0){
        return response.json({
            statuscode: 400,
            massage: "Error en los campos ingresados: ",
            arrayOfValidation
        })
    }

    next();
}


module.exports = checkCoachTypes;