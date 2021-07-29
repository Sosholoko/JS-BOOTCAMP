let btn = document.getElementById('btn');

btn.addEventListener('click', start);

let lname = document.getElementById("name");
let hei = document.getElementById("hei");
let by = document.getElementById("by");
let gender = document.getElementById("gender");
let home = document.getElementById("home");


function start(){
randnum = Math.floor(Math.random() * 82);
fetch(`https://swapi.dev/api/people/${randnum}/`)
    .then(response => response.json())
    .then(function(data){
        let result = data.name;
        console.log(result);
        lname.innerHTML = "<span>Name : </span>"+ data.name;
        hei.innerHTML = "<span>Height : </span>" + data.height + " " +"cm" ;
        by.innerHTML = "<span>Birth Date : </span>" + data.birth_year;
        gender.innerHTML = "<span>Gender : </span>" + data.gender.charAt(0).toUpperCase();
        home.innerHTML = "<span>Skin Color : </span>" + data.skin_color.toUpperCase();
        })
    .catch(error => console.log(error));
    ;
}

start()

