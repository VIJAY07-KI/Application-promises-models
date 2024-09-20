const testMongo = require('../models/testmongomethod')

function empList(req,res) {
    console.log("userEmp")
    testMongo.array()
    .then((result ) =>{
        res.send(result)
    })
    .catch((error) => {
        console.log(error);
    })
}


module.exports = {
    empList
}