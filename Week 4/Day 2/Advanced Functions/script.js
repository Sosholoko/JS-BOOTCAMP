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



// function split(username){
//     let newName = username.split("");
//         return newName;
// }
// function upper(nameArray){
//     let upper = nameArray.map(newName => newName.toUpperCase());
//         return upper;
// }
// function join(nameArray2){
//     let dot = nameArray2.join(".")
//         return dot;
// }


// console.log(join(upper(split("sasha"))));


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


// const students = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55},
//     {name: 'John', score: 75},
// ];

// let goodStudent = students.filter( student => student.score >= 50);
// console.log(goodStudent);


// const number = [2, 3, 4, 5, 6];

// const evenNumber = number.filter(num => num % 2 === 0);
// console.log(evenNumber);




// REDUCE
// -----------------------
//WITHOUT Initial Value
// const numbers = [1,2,3,4];
// //newNum is NOT an array it's a value
// const newNum = numbers.reduce((previous,next) => {
// 	console.log("previous = ", previous);
// 	console.log("next = ", next);
// 	return previous+next
// })
// console.log(newNum);
// 1st loop : previous is equal to 1
// 		 : next is equal to 2
// 		 : action is previous+next --> the sum is 3
// 2nd loop : previous is equal to 3
// 		 : next is equal to 3
// 		 : action is previous+next --> the sum is 6
// 3rd loop : previous is equal to 6
// 		 : next is equal to 4
// 		 : action is previous+next --> the sum is 10
// // --> THE RETURN VALUE OF THE REDUCE IS 10
// //WITH INITIAL VALUE
// const numbers = [1,2,3,4];
// //previous is the accumulator
// const newNum = numbers.reduce((previous,next) => {
// 	console.log("previous = ", previous);
// 	console.log("next = ", next);
// 	return previous+next
// }, 100)
// console.log(newNum)
// 1st loop : previous is equal to 100
// 		 : next is equal to 1
// 		 : action is previous+next --> the sum is 101
// 2nd loop : previous/accumulator is equal to 101
// 		 : next is equal to 2
// 		 : action is previous+next --> the sum is 103
// 3nd loop : previous/accumulator is equal to 103
// 		 : next is equal to 3
// 		 : action is previous+next --> the sum is 106
// 4th loop : previous/accumulator is equal to 106
// 		 : next is equal to 4
// 		 : action is previous+next --> the sum is 110
// --> THE RETURN VALUE OF THE REDUCE IS 110



// --------------------
//Chaining
//------------------


// Since the filter method returns an array we can chain 
// it to the map method which works on an array and vice-versa.
// This process can be applied to all the array methods which 
// makes the code concise.




// let wizards = [
// 	{
// 		name: 'Harry Potter',
// 		house: 'Gryfindor'
// 	},
// 	{
// 		name: 'Cedric Diggory',
// 		house: 'Hufflepuff'
// 	},
// 	{
// 		name: 'Tonks',
// 		house: 'Hufflepuff'
// 	},
// 	{
// 		name: 'Ronald Weasley',
// 		house: 'Gryfindor'
// 	},
// 	{
// 		name: 'Hermione Granger',
// 		house: 'Gryfindor'
// 	}
// ];
// let bestWizards =  wizards.filter(wizard => wizard.house==='Gryfindor')
// console.log(bestWizards)
// let sayHelloToWizards = bestWizards.map(person => `Hello ${person.name}`)
// console.log(sayHelloToWizards)
// //bestWizards is an array of greetings
// let bestWizards =  wizards
// 				  .filter(wizard => wizard.house==='Gryfindor')
// 				  .map(person => `Hello ${person.name}`)
// console.log(bestWizards)



//Objects Spread

// let characters = {
//     fname: "Hermione Granger",
//     house: "Gryfindor",
//     happy: true,
// };

// let {name, house} = characters;
// console.log(name, house);

// let {fname, ...other} = characters;
// console.log(fname, other);
// console.log("Original :" + " " + other);
// other = "Changed";
// console.log("Changed value : " + " " + other);

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// const newStudent = {
//     ...student,
//     goodStudent: true,
//     scores:{
//         ...student.scores
//     }
// };

// newStudent["scores"]["maths"] = 50;

// console.log(newStudent);
// console.log(student);


//Constructor


// class Car {
//     constructor(color, brand, model){
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//     }
//     factory(){
//         return `The new car you've ordered is ${this.brand} ${this.model} ${this.color}`
//     }
//     //get allows to use a function without parentheses. It's getting the asked info
//     get carBrand(){
//         console.log(this.brand)
//     }
//     //can set a new value to a parameter between parentheses
//     set carBrand(newBrand){
//         this.brand = newBrand;
//     }
// }

// const newCar = new Car("black", "Tesla", "Model S");

// console.log(newCar.model);
// console.log(newCar.factory())

// newCar.carBrand

// newCar.carBrand = "Ford"
// console.log(newCar.brand)


// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// console.log("First rabbit type" + " " + killerRabbit.type + " " +"Second rabbit type" + " " +blackRabbit.type);
// console.log(killerRabbit.speak("Hello"))
// console.log(blackRabbit.speak("Hello"))


//Daily Challenge

class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        return ` ${this.uploader} watched all ${this.time} of ${this.title}`
    };
}

const film = new Video("Harry Potter","Sasha", "2 hours");
const serie = new Video("Game of Thrones", "Mike", "7 seasons")
console.log(film.watch());
console.log(serie.watch());