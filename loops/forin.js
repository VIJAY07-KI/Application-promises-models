const std = { name :' vijay' , age : 25 , city : 'king' } ;
const data = Object.keys(std);
console.log(data); //keys object.keys

const inf = Object.values(std);
console.log(inf); //values object.values 

for( let key in std ) {
    console.log(key + " :  " + std[key]);
}   //for in loop

