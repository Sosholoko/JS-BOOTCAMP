// let myArr = [1, 2, 3, 4, 5, 6, 7];

// console.log(myArr.some((value)=>{
//     console.log("value = ", value)
//     return(value%2 == 0);
// }));


// const groc = ["apple"];
// const shop = groc;
// groc.push("banana");
// console.log(groc);
// console.log(shop)


// const person = {
//     lastName:  "Smith",
//     age:  27,
// }

// const newPerson = person;
// newPerson.lastName = "Snow";
// newPerson.friends = {
//     list : ["a", "b", "c"],
// };

// console.log(newPerson.friends);
// console.log(person.friends);



// //Can execute function before initialization
// say()

// function say(){
//     console.log("Welcome")
// };

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);


// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

// grocCopy = groceries;

// groceries.totalPrice = "25$";
// console.log(groceries.totalPrice);
// console.log(grocCopy.totalPrice);

// groceries.other.payed = false;
// console.log(groceries.other.payed);
// console.log(grocCopy.other.payed);


// //Closure

// button = document.getElementById("button");
// result = document.getElementsByClassName("result");

// button.addEventListener('click', () => makeCounter());

// //Self invoking function
// const makeCounter = (() =>{
//     let counter = 0;

//     const increaseCount = () =>{
//         counter ++
//         result.textContent = counter;
//         console.log(counter)
//         return counter
//     }
//     return increaseCount;
// })();


//Curry Function



function split(username){
    let newName = username.split("");
        return newName;
}
function upper(nameArray){
    let upper = nameArray.map(newName => newName.toUpperCase());
        return upper;
}
function join(nameArray2){
    let dot = nameArray2.join(".")
        return dot;
}


console.log(join(upper(split("sasha"))));


//Arrays Methods, Map, Filter, Reduce


//MAP

// const students = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];

// let studScore = students.map(score => score["score"]);
// console.log(studScore);


// let scores = students.map((student)=>{
//     let average = student.score > 50 ? true : false;
//     return {name: student.name, score: student.score, average}
// })

// console.log(scores)


//FILTER


const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55},
    {name: 'John', score: 75},
];

let goodStudent = students.filter( student => student.score >= 50);
console.log(goodStudent);


const number = [2, 3, 4, 5, 6];

const evenNumber = number.filter(num => num % 2 === 0);
console.log(evenNumber);

