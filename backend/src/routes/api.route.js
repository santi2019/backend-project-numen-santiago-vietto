require("dotenv").config();
const express = require("express");
const checkApiParams = require("../utils/checkApiParams");

const apiRouter = express.Router();

const API_KEY = process.env.API_KEY;


apiRouter.post("/history", checkApiParams, async (req, res) => {
  const league = req.body.league;
  const season = req.body.season;

  const url = new URL("https://v3.football.api-sports.io/fixtures");

  url.searchParams.set("league", league);
  url.searchParams.set("season", season);

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "x-apisports-key": API_KEY
      }
    });

    const data = await response.json();

    return res.status(200).json({
      statuscode: 200,
      message: "Datos obtenidos correctamente desde API-FOOTBALL (JSON).",
      data
    });
  } catch (error) {
    return res.status(500).json({
      statuscode: 500,
      message: "Error al comunicarse con API-FOOTBALL.",
      error: error.message
    });
  }
});



apiRouter.get("/live", async (req, res) => {

  const url = "https://v3.football.api-sports.io/fixtures?live=all&timezone=America/Argentina/Buenos_Aires";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-apisports-key": API_KEY
      }
    });

    const data = await response.json();

    return res.status(200).json({
      statuscode: 200,
      message: "Partidos en vivo obtenidos correctamente.",
      data
    });

  } catch (error) {
    return res.status(500).json({
      statuscode: 500,
      message: "Error al comunicarse con API-FOOTBALL.",
      error: error.message
    });
  }
});



module.exports = apiRouter;

