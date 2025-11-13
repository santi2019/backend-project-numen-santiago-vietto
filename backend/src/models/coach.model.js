const { Schema, model, Types } = require("mongoose");

const CoachSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    totalTitles: {
        type: Number,
        required: true
    },
    currentClub: {
        type: Types.ObjectId,
        required: true
    }
});


const Coach = model("Coach", CoachSchema);

module.exports = Coach;
