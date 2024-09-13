function find() {
    new Promise(function(resolve,reject){
        let contactList = [{
                name: "Vijay",
                contactNo: "1234567"
            },
            {
                name: "Ganesh",
                contactNo: "890890908"
            }]
        if (contactList.length) {
            resolve(contactList)
        } else {
            reject("operation is failed as contact list not found")
        }
    })
}

module.exports = { 
    find
}