const Player = require("../models/player.model")

const getAllPlayersService = async () => {
    const allPlayers = await Player.find();

    if(!allPlayers){
        return {message: "Players not found", statusCode: 404}
    }

    return allPlayers;
}

const getPlayerByIdService = async (id) => {

    const player = await Player.findById(id);

    if(!player){
        return {message: "Player not found", statusCode: 404}
    }
    
    return player;
}

const addPlayerService= async (player) => {
    try{
        const newPlayer = new Player(player)

        await newPlayer.save()
        return {message: "Player added successfully", statusCode: 201};
    }catch(error){
        return {message: error, statusCode: 500}
    }
}

const updatePlayerService = async (id, playerToUpdate) => {
    try {
        const playerById = await Player.findById(id);

        if(!playerById){
            return {message: "Player not found", statusCode: 404}
        }

        playerById.firstName = playerToUpdate.firstName;
        playerById.lastName = playerToUpdate.lastName;
        playerById.age = playerToUpdate.age;
        playerById.gender = playerToUpdate.gender;
        playerById.birthDate = playerToUpdate.birthDate;
        playerById.nationality = playerToUpdate.nationality;
        playerById.position = playerToUpdate.position;
        playerById.status = playerToUpdate.status;
        playerById.teamNumber = playerToUpdate.teamNumber;
        playerById.height_cm = playerToUpdate.height_cm;
        playerById.weight_kg = playerToUpdate.weight_kg;
        playerById.totalGoals = playerToUpdate.totalGoals;
        playerById.total_red_cards = playerToUpdate.total_red_cards;
        playerById.total_yellow_cards = playerToUpdate.total_yellow_cards;
        playerById.total_match_played = playerToUpdate.total_match_played;
        playerById.club = playerToUpdate.club;


        await playerById.save();
        return {message: "Player updated successfully", statusCode: 201};
    } catch(error) {
        return {message: error, statusCode: 500}
    }
}

const deletePlayerService = async (id) => {
    try {

        const player = await Player.findByIdAndDelete(id);

        if(!player){
            return {message: "Player not found", statusCode: 404}
        }

        return {message: "Player deleted successfully", statusCode: 201};
    } catch(error){
        return {message: error, statusCode: 500}
    }
}

module.exports = {getAllPlayersService, getPlayerByIdService, addPlayerService, updatePlayerService, deletePlayerService}