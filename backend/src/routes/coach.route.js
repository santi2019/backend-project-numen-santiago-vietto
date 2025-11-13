const express = require("express");
const {getAllCoachesController, getCoachByIdController, addCoachController, updateCoachController, deleteCoachController} = require("../controllers/coach.controller");
const checkCoachTypes = require("../utils/checkCoachTypes");

const coachesRouter = express.Router();   

coachesRouter.get("/", getAllCoachesController)
coachesRouter.get("/:id", getCoachByIdController)
coachesRouter.post("/", checkCoachTypes, addCoachController)
coachesRouter.put("/:id", updateCoachController)
coachesRouter.delete("/:id", deleteCoachController)



module.exports = coachesRouter;