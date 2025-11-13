const {getAllCoachesService, getCoachByIdService, addCoachService, updateCoachService, deleteCoachService} = require("../services/coach.service")

const getAllCoachesController = async (_, response) => {
    const allCoaches = await getAllCoachesService()

    response.json(allCoaches);
}

const getCoachByIdController = async (request, response) => {

    const {id} = request.params;

    const coach = await getCoachByIdService(id);

    response.json(coach);
}

const addCoachController = async (request, response) => {
    
    const newCoach = request.body;

    const message = await addCoachService(newCoach);

    response.json(message);

}

const updateCoachController = async (request, response) => {
    
    const {id} = request.params;
    const coachToUpdate = request.body;

    const message = await updateCoachService(id, coachToUpdate);

    response.json(message);
}

const deleteCoachController = async (request, response) => {

    const {id} = request.params;

    const message = await deleteCoachService(id);

    response.json(message);
}


module.exports = {getAllCoachesController, getCoachByIdController, addCoachController, updateCoachController, deleteCoachController}