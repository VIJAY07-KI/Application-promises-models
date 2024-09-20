//callback with async
function printInfo(name){
    setTimeout(function(){
        console.log('printing info for' + name);
    }, 5000) //delay of 1000ms/1 sec
    console.log("i am first")
    return
}
printInfo("top")