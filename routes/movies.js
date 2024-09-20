const movieRouter = require('express').Router()
const { createMovies, getMovies, getMoviesById, deleteMovies, updateMoviesById } = require("../controllers/movies")

movieRouter.post("/movies",createMovies)
           .get("/movies",getMovies)
           .get("/movies/:ownDefinedName", getMoviesById)
           .delete("/movies/:ownDefinedName", deleteMovies)
           .put("/movies/:ownDefinedName", updateMoviesById)
module.exports = movieRouter
