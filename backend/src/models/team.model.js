const { Schema, model } = require("mongoose");

const TeamSchema = Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    competitions: {
        type: [String],
        required: true
    },
    stadium: {
        type: String,
        required: true
    },
    established: {
        type: Number,
        required: true
    }
});


const Team = model("Team", TeamSchema);

module.exports = Team;
