//Object destructuring

// const person = {
//     name: 'Muthu',
//     age: 25,
//     location: {
//         city :'Virudhunagar',
//         temp: 92
//     }
// };

// //destructuring
// const { name = 'veil', age } = person
// console.log(`${name} is ${age}`);

// const { city, temp } = person.location

// if (city && temp){
//     console.log(`It is ${temp} in ${city}`); 
// };

//Chalaange
// const Book = {
//     titel: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };
// const { name:publisherName = 'Self publish' } = Book.publisher 
// console.log(publisherName);

//Array destructuring
const address = ['83 Ramachandran street', 'Virudhunagar', 'Tamilnadu', '626001']

const [street, city, state, pincode] = address
console.log(`You are in ${city} ${state}`);

//Challange
const Item = ['Coffe (hot)', '$2.00', '$2.50', '$3.00']

const [cofee, , medium] = Item
console.log(`A medium ${cofee} costs ${medium}`);
