const express = require("express");
const playersRouter = require("../routes/player.route")
const coachesRouter = require("../routes/coach.route")
const teamsRouter = require("../routes/team.route")
const apiRouter = require("../routes/api.route")

const app = express();

app.use(express.json()) 
app.use("/players", playersRouter) 
app.use("/coaches", coachesRouter) 
app.use("/teams", teamsRouter) 
app.use("/matches", apiRouter) 

app.get("/", (_, response) => {
    response.send("Bienvenido al servidor del proyecto final de backend de Santiago Vietto para Academia Numen!")
})


module.exports = app;