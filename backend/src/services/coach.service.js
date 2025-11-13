const Coach = require("../models/coach.model")

const getAllCoachesService = async () => {
    const allCoaches = await Coach.find();

    if(!allCoaches){
        return {message: "Coaches not found", statusCode: 404}
    }

    return allCoaches;
}

const getCoachByIdService = async (id) => {

    const coach = await Coach.findById(id);

    if(!coach){
        return {message: "Coach not found", statusCode: 404}
    }
    
    return coach;
}

const addCoachService= async (coach) => {
    try{
        const newCoach = new Coach(coach)

        await newCoach.save()
        return {message: "Coach added successfully", statusCode: 201};
    }catch(error){
        return {message: error, statusCode: 500}
    }
}

const updateCoachService = async (id, coachToUpdate) => {
    try {
        const coachById = await Coach.findById(id);

        if(!coachById){
            return {message: "Coach not found", statusCode: 404}
        }

        coachById.firstName = coachToUpdate.firstName;
        coachById.lastName = coachToUpdate.lastName;
        coachById.age = coachToUpdate.age;
        coachById.nationality = coachToUpdate.nationality;
        coachById.birthDate = coachToUpdate.birthDate;
        coachById.totalTitles = coachToUpdate.totalTitles;
        coachById.currentClub = coachToUpdate.currentClub;

        await coachById.save();
        return {message: "Coach updated successfully", statusCode: 201};
    } catch(error) {
        return {message: error, statusCode: 500}
    }
}

const deleteCoachService = async (id) => {
    try {

        const coach = await Coach.findByIdAndDelete(id);

        if(!coach){
            return {message: "Coach not found", statusCode: 404}
        }

        return {message: "Coach deleted successfully", statusCode: 201};
    } catch(error){
        return {message: error, statusCode: 500}
    }
}

module.exports = {getAllCoachesService, getCoachByIdService, addCoachService, updateCoachService, deleteCoachService}