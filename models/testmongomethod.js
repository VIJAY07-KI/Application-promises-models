function array() {
    return new Promise(function(resolve,reject){
        let empName = [{
                name: "ajay",
                contactNo: "0998989"
            },
            {
                name: "akhil",
                contactNo: "9846534"
            }]
        if (empName.length) {
            resolve(empName)
        } else {
            reject("operation is failed as contact list not found")
        }
    })
}

module.exports = { 
    array
}