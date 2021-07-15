//Function executed after 2 sec

// setTimeout( ()=>{
//     console.log("2 sec have passed")
// }, 2000);


// //Function executed after 3 sec
// setTimeout(wait, 3000);

// function wait(){
//     console.log("3 sec have passed")
// }

function cancel(){
    clearInterval(movingg)
};


//Function will be executed every 2 sec
// let id = setInterval(function(){
//     console.log("Hi ")
// }, 2000)


let box = document.getElementById("box");
let screen = window.screen.availWidth;

function move(){
        box.style.marginLeft = box.offsetLeft + 0.5 + 'px';
            if(box.offsetLeft > screen - 300) {
                clearInterval(movingg);
        }
};

function moving(){
    movingg = setInterval(move, 100);
}


let text = document.getElementById("txt");
let dragbox = document.getElementById("box2");
let area = document.getElementById("area");

//execute once when start dragging
// dragbox.addEventListener("dragstart", function(e){
//     console.log("start dragging", e.target.id)
// } );

// //execute as long as you're maintaining the dragging
// dragbox.addEventListener("drag", function(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log("drag", e.target.id, x , y)
// });


// dragbox.addEventListener("drag", function(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log("dragging", x, y);
//     dragbox.style.left = x + "px";
//     dragbox.style.top = y + "px";
// });


text.addEventListener("dragstart", dragstart_handler);
area.addEventListener("dragover", dragover_handler);
area.addEventListener("drop", drop_handler);

function dragstart_handler(e){
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e.target.id);
};

function dragover_handler(e){
    e.preventDefault();
    // e.dataTransfer.dropEffect = 'link'
    area.classList.add('highlight')
};

function drop_handler(e){
    e.preventDefault();
    area.classList.remove('highlight')
    const data  = e.dataTransfer.getData('text/plain')
    console.log(data);
    e.target.appendChild(document.getElementById(data))
};