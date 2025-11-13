const {getAllPlayersService, getPlayerByIdService, addPlayerService, updatePlayerService, deletePlayerService} = require("../services/player.service")

const getAllPlayersController = async (_, response) => {
    const allPlayers = await getAllPlayersService()

    response.json(allPlayers);
}

const getPlayerByIdController = async (request, response) => {

    const {id} = request.params;

    const player = await getPlayerByIdService(id);

    response.json(player);
}

const addPlayerController = async (request, response) => {
    
    const newPlayer = request.body;

    const message = await addPlayerService(newPlayer);

    response.json(message);

}

const updatePlayerController = async (request, response) => {
    
    const {id} = request.params;
    const playerToUpdate = request.body;

    const message = await updatePlayerService(id, playerToUpdate);

    response.json(message);
}

const deletePlayerController = async (request, response) => {

    const {id} = request.params;

    const message = await deletePlayerService(id);

    response.json(message);
}


module.exports = {getAllPlayersController, getPlayerByIdController, addPlayerController, updatePlayerController, deletePlayerController}