const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const a = [1,12,23,34,45]
const b = a.filter(c => c%3 === 0);  // Filter
console.log(b)

const c = [5,6,7,8,9]
c.forEach (b => {                     // ForEach
   console.log(b * 2);
})

let fruits = ['apple', 'banana', 'mango'];
fruits.forEach ( n => {               // ForEach
   console.log(n)
});
 
for (let i = 0; i < fruits.length; i++) {   // For Loop
    console.log(fruits[i]);
}

for (i = 1 ; i <= 5 ; i++) {                // For Loop
    console.log(i)
}

function listFruits(fruits) {              // For Loop Inside a Function
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  }
  
let myFruits = ['apple', 'banana', 'cherry'];
listFruits(myFruits);

const f = [2, 7, 9, 88,  76]
const e = f.map( g => g % 3 === 0);               // Map REminder
console.log(e)
const n = f.map( g => g /3 );                      // Map Que
console.log(n)

let i = 1
while (i < 8) {                                // While
    console.log(i);
    i++;
}