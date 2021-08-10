const fs = require('fs');

//console.log(fs);

//Read files

//it's by default an async function, so it wont be executed first if big files
// fs.readFile('./text.txt', (err, data)=>{
//     if(err){
//         console.log(err)

//     }else{
         //if not toString() data will be unreadable
//         console.log(data.toString())
//     }
// })

//making it a sync func if wanted with readFileSync

// const data = fs.readFileSync('./text.txt');
// console.log(data.toString());
// console.log('after reading file');


//append to a file
//if the file doesn't exist it will create it

// let text = 'jddsljfljsfsf';
// fs.appendFile('./text.txt', text, (err)=>{
//     if(err){
//         console.log(err);
//     }
// })


//write to a file
//if changing obj value it'll overwrite defaults values

// let obj = {
//     username: "Mike",
//     password: "azertyiuop"
// };

// fs.writeFile('./users', JSON.stringify(obj), (err)=>{
//     console.log(err)
// });


//delete a file

// fs.unlink('./text.txt', (err)=>{
//     console.log(err)
// });


//copy a file

// fs.copyFile('./users', './users2', (err)=>{
//     if(err){
//         console.log(err)
//     } 
// })




