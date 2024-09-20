const express = require('express') // Exress framework module
const mongoose = require('mongoose') // Mongoose module
const cors = require('cors');
const app = express()

const userRouter = require('./routes/users') // imported users routes
const movieRouter = require('./routes/movies')  // imported movie routes
const usersFile = require('./controllers/users')

app.use(express.json()) // interaction
app.use(cors());         // Allows react apis to use backend api

mongoose.connect('mongodb://localhost:27017/movie-rating', {useNewUrlParser : true})  // connection to db
         .then((connectedResponse) => {
            console.log("connected to movie-rating db -----------> ")           // promise
         })
         .catch( err => {
            console.log(err)
            mongoose.disconnect()
         }
         )

app.use('/',userRouter )            // Going to routes
app.use('/', movieRouter)


app.use('/test',function(req ,res) {
   console.log("home world")
   res.send("home world")
})

app.use('/contact',usersFile.getContact)


app.listen(3200, () => {              // Express listening to port
    console.log("Listening Port")
})

// request -> app.js -> routes -> contro -> model 
// response -> model -> contro -> routes -> app.js
