const express = require("express");
const {getAllPlayersController, getPlayerByIdController, addPlayerController, updatePlayerController, deletePlayerController} = require("../controllers/player.controller");
const checkPlayerTypes = require("../utils/checkPlayerTypes");

const playersRouter = express.Router();   

playersRouter.get("/", getAllPlayersController)
playersRouter.get("/:id", getPlayerByIdController)
playersRouter.post("/", checkPlayerTypes, addPlayerController)
playersRouter.put("/:id", updatePlayerController)
playersRouter.delete("/:id", deletePlayerController)



module.exports = playersRouter;