const checkTeamTypes = (request, response, next) => {
    const team = request.body;

    const arrayOfValidation = [];

    if (typeof team.name !== "string") arrayOfValidation.push("name debe ser un string.");
    if (typeof team.location !== "string") arrayOfValidation.push("location debe ser un string.");
    if (!Array.isArray(team.competitions)) arrayOfValidation.push("competitions debe ser un array.");
    if (typeof team.stadium !== "string") arrayOfValidation.push("stadium must debe ser un string.");
    if (typeof team.established !== "number") arrayOfValidation.push("established debe ser un number.");

    
    if(arrayOfValidation.length > 0){
        return response.json({
            statuscode: 400,
            massage: "Error en los campos ingresados: ",
            arrayOfValidation
        })
    }

    next();
}


module.exports = checkTeamTypes;