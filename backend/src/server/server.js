const express = require("express");

const app = express();

app.use(express.json())  

app.get("/", (_, response) => {
    response.send("Bienvenido al servidor del proyecto final de backend de Santiago Vietto para Academia Numen!")
})


module.exports = app;