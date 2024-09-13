const express = require('express')
const app = express()
const usersFile = require('./controllers/users')
// const {getContact} = require('./controllers/users')

app.get('/users',function(req ,res) {
    console.log("usersusers world")
    res.send("usersusers world")
})

app.use('/contact',usersFile.getContact)
// app.use('/contact',getContact)


app.use('/',function(req ,res) {
    console.log("home world")
    res.send("home world")
})

app.listen(3000, () => {
    console.log("Listening Port")
})
