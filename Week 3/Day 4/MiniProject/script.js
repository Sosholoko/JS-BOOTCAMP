let field = document.getElementById("field");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let field4 = document.getElementById("field4");
let button = document.getElementById("add");
let area = document.getElementById("tasks");
let del = document.getElementById("del");
let arr = [];
let task;


field.addEventListener('keypress', activate);
field2.addEventListener('keypress', activate);
field3.addEventListener('keypress', activate);
field4.addEventListener('keypress', activate);

function activate(e){
    if(e.keyCode === 13){
        adding()
    }
};

function adding(){
    let value = field.value;
    let value2 = field2.value;
    let value3 = field3.value.split("-");
    let value4 = field4.value.split("-");
    let restday = value4[2] - value3[2];
    day = value3[2];
    month = value3[1];
    year = value3[0];
    day2 = value4[2];
    month2 = value4[1];
    year2 = value4[0];
    if (value.length <= 0 || value2.length <= 0){
        alert("Please fill up the fields")
    }
    else{
        console.log(value);
    let task = document.createElement("li");
    arr.push(value);
    console.log(arr);
    task.setAttribute("id", arr.indexOf(value));
    task.innerHTML = `${value.toUpperCase()}
                    <span class="more" ><p id ='titl'>Description</p>${value2}<br>
                    <p id ='titl'>Starting Date</p>${day}-${month}-${year}<br>
                    <p id ='titl'>Ending Date</p>${day2}-${month2}-${year2}<br>
                    <p id ='titl'>Remaining Days</p>${restday}</span>

    <button id="del" onclick="deleting(event)">x</button>
    <input type="checkbox" id="check" class="check"></input>
    <button class='rdmore'>More...</button>`; 
    
    area.appendChild(task);
    let rdbtn = document.getElementsByClassName('rdmore');
    console.log(rdbtn);
    rdbtn[arr.indexOf(value)].addEventListener('click', add);

    function add(e){
        e.target.parentNode.children[0].classList.toggle('more');
    };
    const taskdet = {
        [field.value] : field2.value
    };
    localStorage.setItem('Task', JSON.stringify(taskdet));
    field.value = '';
    field2.value = '';
    field3.value = '';
    field4.value = '';
    };
};

function deleting(e){
    var checkin = confirm('Do you want to delete the selected task ?')
    if( checkin == true){
        e.target.parentNode.remove();
        arr.shift();
    }
    else{
        null;
    }
    
};

function deletall(){
    var checkinall = confirm('Do you want to delete all the tasks ?')
    if(checkinall == true){
        arr = [];
        area.innerHTML = "";
    }
    else{
        null;
    }
    
}

