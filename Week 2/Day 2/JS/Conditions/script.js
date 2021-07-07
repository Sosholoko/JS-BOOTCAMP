// let fruits = ["Bananas", "Apples", "Oranges", "Blueberries"];
// fruits.shift();
// fruits.sort();
// fruits.push("Kiwi");
// fruits.splice(0, 1);
// fruits.reverse();
// console.log(fruits);

// let moreFruits = ["Bananas", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(moreFruits[1][1][0]);




//Day 2 Conditions and Objects


// let userCart = {
//     username : "Mike",
//     password : 1234,
//     cart : ["Apples", "Banana", "Pear"],
//     price : {
//         apple : 1,
//         banana : 1.5,
//         pear : 2
//     },
//     isUserOn : true,
//     cart2 :{
//         apple : 5,
//         banana : 2,
//         pear : 5
//     },
// };

// console.log(userCart["username"]);
// console.log(userCart["cart"][[2]])
// console.log(userCart["cart2"]["pear"])

// let numberPear = userCart["cart2"]["pear"];
// let pricePear = userCart["price"]["pear"];
// let totalPricePear = numberPear * pricePear;

// alert(`The pear cost ${totalPricePear} shekels to ${userCart["username"]}`)

// userCart["price"]["pear"] *= 1.17;
// let fruiz = prompt("Which fruits do you want ?")
// let fruit = fruiz.toLowerCase();

// if (fruit == "apple"){
//     appleprice = userCart["price"]["apple"];
//     alert("Apple:" + appleprice + "$");
// }
// else if (fruit == "banana"){
//     bananaprice = userCart["price"]["banana"];
//     alert("Banana:" + bananaprice+ "$");
// }
// else if(fruit == "pear"){
//     pearprice = userCart["price"]["pear"];
//     alert("Pear:" + pearprice+ "$");
// }
// else{
//     alert("The fruit you asked is not available")
// };


// SWITCH CASE


// let username = "Lea";

// switch(username){
//     case "Sasha":
//         console.log("It's not Mike")
//         break;
//     case "Mike":
//         console.log("Yes its Mike")
//         break;
//     default: 
//         console.log("Something's wrong...")
// }


//Daily Challenge Day 3


// var sentence = "This dinner is not that bad";

// let wordBad = sentence.indexOf("bad");
// let wordNot = sentence.indexOf("not");

// if(wordNot < wordBad && wordNot != -1 && wordBad !=-1){
//     let x = sentence.substring(wordNot, wordBad + 3);
//     let newSent = sentence.replace(x, "good");
//     console.log(newSent);
// }
// else{
//     console.log(sentence);
// }



// let sentence = "This dinner is not that bad, I like it";

// let start = sentence.indexOf('not');
// let end = sentence.indexOf('bad') + 3;
// let substr = sentence.substring(start, end);

// if (end > start){
//     sentence = sentence.replace(substr, "good");
// }
// console.log(sentence);



// for (let x = 1; x <= 5; x++ ){
//     console.log("Hello 5eask0")
// }




//Daily Challenge Day 4

// let star;

// for(let x = 1; x <= 6 ; x++){

//    star = "  *  ".repeat(x);

// console.log(star);
// }


// for (let i = 0; i <= 15; i++){
//     if (i % 2 === 0){
//         console.log( i + " " +"is even");
//     } 
//     else{
//         console.log(i + " " +"is odd");
//     }
// };


// let colors = ["Blue", "Red", "Purple", "Green"];

// for( let i = 0; i < colors.length; i++ ){
//     console.log(colors[i]);
// };


// let prices = [20, 12, 5, 4, 2];
// let sum = 0;
// let sum = prices[0] + prices[1] + prices[2] + prices[3] + prices[4];

// for(let i = 0; i < prices.length; i++){
//     sum = sum + prices[i];
// }
// console.log(sum);



// FOR OF loop



// for( let number of prices){
//     console.log("The price is : " + number);
// };




// FOR IN loop


// profile = {
//     name : "Sasha",
//     lastname : "Kharoubi",
//     age : 21
// }


// for (let cred in profile){
//     console.log(profile[cred]);
// }




// WHILE loop
//While the condition is not completed, it'll ask indefinitly


// let username = prompt("What's your name ?");

// while (username.length <= 4){
//     username = prompt("What's your name ?");
// };

// alert(username);




// WHILE AND DO loop

// let num = 2

// do{
//     console.log("Your number is" + " " + num)
// }while (num < 2){
//     num ++;
//     console.log(num)
// };