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




//Daily Challenge Day 5

// function longestWord(arr){
//     return arr.slice().sort((a, b) => {
//     return b.length - a.length;
//     })
    
// }

// function textArr(arr){
//     let endString = '';
//     let word = longestWord(arr);
//     let asterix = '*'.repeat(word.length + 4);
//     endString += asterix + "\n";


// for(let i = 0; i < arr.length; i++){
//     if(arr[i].length < word.length){
//         let subst = word.length - arr[i].length;
//         let space = ' '. repeat(subst);
//           endString += `* ${arr[i]}${space} *\n`;

//     }else {
//           endString += `* ${arr[i]} *\n`;
//     }
    
// }
// endString += asterix;
// console.log(endString);


// }
// let words = prompt("Please input some words separated by a coma");
// words = words.split(",").map(item=> item.trim());
// textArr(words);

// // ["Hello", "World", "in", "a", "frame"]





// function frame(){

//     // Prompt the user 
//     let words = prompt("Please input some words separated by a coma");

//     //Split words of the user input
//     // take out spaces (map(), trim())
//     //map = loop the array and changes each items based on the function asked
//     //trim() takes out space
//     words = words.split(",").map(item=> item.trim());

//     //find the longest word
//     let longest = '';

//     //loop the array and check which one is the longest word, loop 'of' is specific for array
//     //loop 'in' is for objects
//     for (word of words){
//         //checking
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     //print upper horizontal star
//     console.log('*'.repeat(longest.length + 6));

//     //print the * word *

//     for(w of words){
        
//         //create the space for each word that has less letters than the longest
//         let spaceWord = (" ".repeat(longest.length - w.length));
        
//         //print the * with space and between each word
//         console.log("* " + " " + w + spaceWord + " " + "*");
//     }

//     console.log('*'.repeat(longest.length +6));
// }

// frame();


// Daily Challenge Day 1 Week 3

// var count = prompt("Choose a starting number");
// var beer = "bottles";
// var takeOut = 1;
// while (count > 0) {
//     if (count == 1) {
//         var beer = "bottle"
//         console.log("Take " + takeOut++ + " down, pass it around,")
//     }
//     if (takeOut == 1) {
//         console.log(count + " " + beer + " of beer on the wall");
//         console.log("Take " + takeOut++ + " down, pass it around,")
//     }
//     console.log(count + " " + beer + " of beer,");
//     console.log("Take " + takeOut++ + " down pass them around,");
//     count = count - takeOut + 1;
//     if (count > 0) {
//         if (count == 1) {
//             var beer = "bottle"
//             console.log("Take " + takeOut++ + " down pass it around,")
//         }
//         console.log(count + " " + beer + " of beer on the wall.");
//     } else {
//         if (count < 1) {
//             var beer = "bottles"
//         }
//         console.log("No more " + beer + " of beer on the wall.");
//     }
// }




//Exercise Game



// count = 0


// function play(){
    
//     var val = confirm('Do you want to play the game ?')
//     if (val){
//         numb = prompt("Choose a number between 1 and 10")
//         if (isNaN(numb) || numb < 1 || numb > 10){
//             alert("Invalid Number")
//         } 
//         else{
//             alert("Alright let's play, I'll try to guess")
//             function game(){
//                 autonum = Math.floor(Math.random() * 10) + 1;
//                 guess = prompt("Guess my number")
//                 if (guess > autonum){
//                     alert("My number is smaller than that, try again");
//                     game()
//                 }
//                 else if (guess < autonum){
//                     alert("My number is bigger than that, try again");
//                     game()
//                 }
//                 else{
//                     alert("Congratulation it's the number")
//                     count ++
//                     if (count > 3){
//                         alert("You're on fire today !")
//                     }
//                     let playAgain = confirm("Do you want to play again ?")
//                     if (playAgain){
//                         play()
//                     }
//                     else{
//                         alert("Come back soon !")
//                     }
//                 }
//             }
//             game()
//         }

//     }
//     else{
//         alert('Alright good bye')
//     }
    
// }

