 function greet(name, callback, callback2){
    console.log('hello' + name);
    callback();
    callback2();
 }

function welcome (){
        console.log('welcome!!!')
}
function go (){
    console.log('go!!!')
}
greet('vijay',go,welcome)
 
//callback with async
function printInfo(name, callback){
    setTimeout(function(){
        console.log('printing info for' + name);
        callback('plz call back...');
    }, 5000) //delay of 1000ms/1 sec
    console.log("i am first")
    return
}
//callback
function displayMessage(mesg){
    console.log(mesg);
}

printInfo('vijay',displayMessage);

function fetchUserData(userId, callback){
    setTimeout(function() {
        const users ={
            1 : {id : 1, name : "vijay"},
            2 : {id : 2, name : "nag"},
        };
        const user = users[userId];
        if(user) {
            callback(null,user);
        }else{
            callback("user not found", null)
        }
    },1000);
}
function handleUserData(error,user){
    if(error){
        console.error("error:",error);
    } else{
        console.log("user:",user);
    }
}
fetchUserData(3,handleUserData)