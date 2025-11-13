const express = require("express");
const {getAllTeamsController, getTeamByIdController, addTeamController, updateTeamController, deleteTeamController} = require("../controllers/team.controller");
const checkTeamTypes = require("../utils/checkTeamTypes");

const teamsRouter = express.Router();   

teamsRouter.get("/", getAllTeamsController)
teamsRouter.get("/:id", getTeamByIdController)
teamsRouter.post("/", checkTeamTypes, addTeamController)
teamsRouter.put("/:id", updateTeamController)
teamsRouter.delete("/:id", deleteTeamController)



module.exports = teamsRouter;