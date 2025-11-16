const Team = require("../models/team.model")

const getAllTeamsService = async () => {
    const allTeams = await Team.find();

    if(!allTeams){
        return {message: "Team not found", statusCode: 404}
    }

    return allTeams;
}

const getTeamByIdService = async (id) => {

    const team = await Team.findById(id);

    if(!team){
        return {message: "Team not found", statusCode: 404}
    }
    
    return team;
}

const addTeamService= async (team) => {
    try{
        const newTeam = new Team(team)

        await newTeam.save()
        return {message: "Team added successfully", statusCode: 201};
    }catch(error){
        return {message: error, statusCode: 500}
    }
}

const updateTeamService = async (id, teamToUpdate) => {
    try {
        const teamById = await Team.findById(id);

        if(!teamById){
            return {message: "Team not found", statusCode: 404}
        }

        teamById.name = teamToUpdate.name;
        teamById.location = teamToUpdate.location;
        teamById.competitions = teamToUpdate.competitions;
        teamById.stadium = teamToUpdate.stadium;
        teamById.established = teamToUpdate.established;


        await teamById.save();
        return {message: "Team updated successfully", statusCode: 201};
    } catch(error) {
        return {message: error, statusCode: 500}
    }
}

const deleteTeamService = async (id) => {
    try {

        const team = await Team.findByIdAndDelete(id);

        if(!team){
            return {message: "Team not found", statusCode: 404}
        }

        return {message: "Team deleted successfully", statusCode: 201};
    } catch(error){
        return {message: error, statusCode: 500}
    }
}

module.exports = {getAllTeamsService, getTeamByIdService, addTeamService, updateTeamService, deleteTeamService}