const Movie = require("../models/movies")

function createMovies(req,res){
    const instanceMovie = new Movie(req.body)
    instanceMovie.save()
    .then((savedMovieDetails) =>{
        console.log("saved movie details")
        res.send(savedMovieDetails)
    }) 
    .catch((error) =>{
        console.log("error")
        res.send(error)
    })
}

function getMovies(req,res){
    Movie.find()
    .then((getMovieDetails) => {
        res.send(getMovieDetails)
    })
    .catch((error)=> {
        console.log(error)
    })

}

function getMoviesById(req,res){
    console.log(" get movies by id")
    console.log(req)
    // Movie.findById(req.params.ownDefinedName)
    Movie.find({name: req.params.ownDefinedName})
    .then((getMovieDetailsById) => {
        console.log("getMovieDetailsById")
        console.log(getMovieDetailsById)
        res.send(getMovieDetailsById)
    })
    .catch((error) =>{
        console.log(error);
    })
}

function deleteMovies(req,res) {
    console.log(" delete movies")
    console.log(req)
    Movie.findByIdAndDelete(req.params.ownDefinedName)
    .then((movieDetails) => {
        return res.send(movieDetails)
    })
    .catch((error) =>{
        console.log(error)
    })
}

function updateMoviesById(req,res) {
    console.log("update movies by id")
    Movie.findById(req.params.ownDefinedName)
    .then((updateMovieDetails) => {
        console.log(updateMovieDetails)
        if(!updateMovieDetails) {
            return res.send(" movie details not present")
        }
        updateMovieDetails.set({name : req.body.name})
        updateMovieDetails.save()
        .then((savedUpdateMovieDetails) =>{
            return res.send(savedUpdateMovieDetails)
        })
        .catch((error) =>{
            res.send(error)
        })
    })
    .catch((error)=>{
        res.send(error)
    })
}





module.exports = { createMovies ,
     getMovies , getMoviesById , 
     deleteMovies , updateMoviesById}