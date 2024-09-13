const mongodbMethods = require( "../models/mongodb-methods");

function vijay(a , b) { 
    console.log(" vijay")
    return a + b;
}
const result = vijay( 2,3)
console.log(result)

// function getContact(req , res){
//     console.log(" contact world")
//     return res.send("contact world")
// }/
// funcion 
function getContact(req,res){
    console.log("contact")
    mongodbMethods.find
    .then((contactData) => {
        res.send(contactData)
    })
    .catch((error)=> {
        console.log(error);
    })

}
//function getContact(req , res){ 
//console.log(" contact world")
// dbData = mongodb.find()
// console.log(dbData)
// send info to api 
// from where you wil send
//mongodb.find().then((contactData) => res.send(contactData)).catch()


// from db you are getting data
// how you will take that data and will send in response

module.exports={
    getContact
}
