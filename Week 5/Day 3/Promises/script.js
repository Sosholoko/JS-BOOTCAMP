//1rst example
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
// 	 setTimeout(() => {
// 	    if (completed) {
// 	    	console.log("After 5 seconds")
// 	    	console.log("resolve = ", resolve)
// 	        resolve("I have completed learning JS.");
// 	    } else {
// 	        reject("I haven't completed learning JS yet.");
// 	    }
// 	    console.log(learnJS)
// 	 }, 5000);
// });
// console.log(learnJS)
// //2nd example
// let mathGrade = 90;
// let learnJS = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 	    if (mathGrade >= 90) {
// 	        resolve("I'm buying you a gift");
// 	    } else {
// 	        reject("I don't love you anymore");
// 	    }
// 	    console.log(learnJS)
// 	}, 5000);
// });
// console.log(learnJS)



//Promises Examples


// let mainfunc = (vari)=>{
// let varifunc = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         if (typeof vari === 'string' ){
//             resolve(vari.toUpperCase());
//             console.log("After 5 sec");
//             console.log("resolve" + resolve)
//         }
//         else{
//             reject(vari);
//         }
//     }, 5000);
// })
// return varifunc;
// }

// let promise = mainfunc(prompt("input string"))
// promise
//     .then(uppercase => console.log(uppercase.repeat(2)))
//     .catch(error => console.log("Something went wrong..." + error))
//     .finally(() => console.log("Congratulation"))

// Fetch


//????


// Async / Wait

// async function sayHello(username){
//     return `Hello ${username}`
// }

// let result = sayHello("Sasha");
// console.log(result);

// result.then(response => console.log(response))



//Async multiple function


const vip = (fperso, sperso)=>{
    let vipcheck = new Promise ((resolve, reject) =>{
        if (typeof fperso == "string" && typeof sperso == "string"){
            resolve([fperso, sperso])
        }
        else{
            reject("Not string")
        }
    })
    return vipcheck
};

const noun = (nn)=>{
    let nncheck = new Promise((resolve, reject) =>{
        if( nn.length > 3){
            resolve(nn)
        }
        else{
            reject("Not long enough")
        }
    })
    return nncheck;
}

const town = (city)=>{
    let towncheck = new Promise((resolve, reject)=>{
        if( city.charAt(0) === city.charAt(0).toUpperCase() ){
            resolve(city);
        }
        else{
            reject("First letter not capital")
        }
    })
    return towncheck;
}

const word = (verb)=>{
    let wordcheck = new Promise((resolve, reject) =>{
        if( verb.endsWith("ing") === true){
            resolve(verb)
        }
        else{
            reject("Not finishing with 'ing'")
        }
    })
    return wordcheck;
}

async function end(){
    let f1 = await vip("Barack Obama", "Benyamin Netanyaou");
    let f2 = await noun("football");
    let f3 = await town("New York");
    let f4 = await word("playing");
    return `${f1[0]} and ${f1[1]} are ${f4} ${f2} in ${f3}`;
}

console.log(end())

let result = end();

result.then(response => console.log(response))







