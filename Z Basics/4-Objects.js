const std = { name :' vijay' , age : 25 , city : 'banglore' } ;
const data = Object.keys(std);         // Fetching all keys as array ["name", "age", "city"]
console.log(data); //keys object.keys

const inf = Object.values(std);         // Fetching all values as array ["vijay", 25, "banglore"]
console.log(inf); //values object.values 

for( let key in std ) {
    console.log(key + " :  " + std[key]);          // For in loop
}   //for in loop

