let field = document.getElementById("field");
let button = document.getElementById("add");
let area = document.getElementById("tasks");
let del = document.getElementById("del");
let arr = [];
let task;
//function for the add button to take the info from the field

function adding(){
    let value = field.value;
    if (value.length <= 0){
        alert("You need to type a task first")
    }
    else{
        console.log(value);
    let task = document.createElement("li");
    arr.push(value);
    console.log(arr);
    task.setAttribute("id", arr.indexOf(value));
    task.innerHTML = `${value}
    <button id="del" onclick="deleting(event)">x</button>
    <input type="checkbox" id="check"></input>`; 
    area.appendChild(task);
    field.value = '';
    };
    
};

function deleting(e){
    e.target.parentNode.remove();
    arr.shift();
};

function deletall(){
    arr = [];
    area.innerHTML = "";
}

