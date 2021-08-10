// function sendData(){
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     fetch('http://localhost:3000/login',{
//     method:'POST',
//     headers: {
//         'Content-type':'application/json'
//     },
//     body: JSON.stringify({username,password})
//     })
//     .then(res => res.json())
//     .then(data => {
//         let root = document.getElementById('root');
//         root.innerHTML = data.message
//     })
//     .catch(e => {
//         console.log(e);
//     })
// }


function getRobots(){
    fetch('http://localhost:3000/robots')
    .then(res => res.json())
    .then(data => {
        let root = document.getElementById('robots');
        root.innerHTML = data[1].name
        console.log(data);
    })
    .catch(e=>{
        console.log(e)
    })
}