const mongodbMethods = require( "../models/mongodb-methods");
const User = require("../models/user")
function vijay(a , b) { 
    console.log(" vijay")
    return a + b;
}
const result = vijay( 2,3)
console.log(result)

function getContact(req,res){
    console.log("contact")
    mongodbMethods.find()
    .then((contactData) => { // our own name to get result
        res.send(contactData)
    })
    .catch((error)=> {
        console.log(error);
    })
}

function createUsers(req,res){
    console.log("createUsers")
    console.log(req)
    const instanceUser  =  new User (req.body)
    instanceUser.save()
    .then( (savedDetails) => {
        console.log("saved deatils")
        res.send(savedDetails)
    }

    )
    .catch((error) => {
        console.log("error")
        res.send(error)
    }
        

    )
}

function getUsers(req,res) {
    console.log("get users")
    User.find() // User.find({email: req.query.email})
    .then((getUserDetails) => {
        console.log("getUserDetails=================")
        console.log(getUserDetails)
        res.send(getUserDetails)
    })
    .catch((error) =>{
        console.log(error);
    })
}

function getUsersById(req,res) {
    console.log(" get users by id")
    console.log(req)
    // User.find({ _id: req.params.id})/
    User.find({name: req.params.ownDefinedName})
    .then((getUsersByIdDetails) =>{
        console.log("getUsersByIdDetails")
        console.log(getUsersByIdDetails)
        res.send(getUsersByIdDetails)
    })
    .catch((error) =>{
        console.log(error);
    })

}

// const deleteUsers = (request, response) => {

function deleteUsers(req,res) {
    console.log(" delete users")
    // User.deleteOne({_id: req.params.ownDefinedName})/
    User.findById(req.params.id)
    .then((user) => {
        console.log("userDetailsuserDetailsuserDetails")
        console.log(user)
        if(!user) {
            return res.send("User Details not present, please check email")
        }
        console.log(user)
        
        user.remove()
    .then((deleteUserDetails) => {
        res.send(deleteUserDetails)
    })
    .catch((error)=>{
        console.log(error);
    })
})
.catch((error)=>{
    console.log(error);
})
}

function updateUsersById(req,res) {
    console.log(" update Users By id")
    User.findById(req.params.ownDefinedName)
    .then((updateUsersDetails) =>{
        console.log("update users Details")
        console.log(updateUsersDetails)
        if(!updateUsersDetails) {
            return res.send(" users details not present please check email")
        }
        updateUsersDetails.set({ name : req.body.name})
        updateUsersDetails.save()
        .then((savedUpdateUserDetails)=> {
            return res.send(savedUpdateUserDetails)
        })
        .catch((error) =>{
            res.send(error)
        })
    })
    .catch((error) =>{
        res.send(error)
    })

}


module.exports={
    getContact , createUsers , getUsers , getUsersById ,deleteUsers , updateUsersById
}
