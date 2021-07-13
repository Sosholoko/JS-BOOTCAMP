// let title = document.getElementById("tit");

// //function name should not be with parentheses
// title.addEventListener("click", hello);

// function hello(){
//     alert(title.textContent);
// };



// function insertRow(){
//     num = 2
//     numplus = num++
//     let table = document.getElementById("sampleTable");
//     let row = table.insertRow(2);
//     let cell = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     cell.innerHTML = "Row"+ num++ +"Cell 1" ;
//     cell2.innerHTML = "Row" + num++ + "Cell 2";
// }

// let planets = ["Mercury", "Mars", "Earth", "Jupiter"];

// let button = document.getElementById('btn');
// button.addEventListener("click", addPlanet);

// function addPlanet(event){
//     let section = event.target.nextElementSibling;
//     for (let planet of planets){
//         let divP = document.createElement("div");
//         console.log("hi")
//         divP.addEventListener("mouseover", changeColor);
//         let textNode = document.createTextNode(planet);
//         divP.appendChild(textNode);
//         section.appendChild(divP);
//         }
// }

// function changeColor(event){
//     event.target.style.color = "red";
//     event.target.style.fontSize = "20px";
// }




function story(){
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let frname = document.getElementById("friendname").value;
    let pname = document.getElementById("place").value;
    
    
    alert(`${fname} and ${frname} are fiends`);
};