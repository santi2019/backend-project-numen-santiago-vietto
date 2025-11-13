const { Schema, model, Types } = require("mongoose");

const PlayerSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    teamNumber: {
        type: Number,
        required: true
    },
    height_cm: {
        type: Number,
        required: true
    },
    weight_kg: {
        type: Number,
        required: true
    },
    totalGoals: {
        type: Number,
        required: true
    },
    total_red_cards: {
        type: Number,
        required: true
    },
    total_yellow_cards: {
        type: Number,
        required: true
    },
    total_match_played: {
        type: Number,
        required: true
    },
    club: {
        type: Types.ObjectId,
        required: true
    }
});


const Player = model("Player", PlayerSchema);

module.exports = Player;
