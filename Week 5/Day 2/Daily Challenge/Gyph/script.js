
var space = document.getElementById("search");
space.addEventListener("keypress", startlaunch);

var delt = document.getElementById("dlt");
var content = document.getElementById("container");

delt.addEventListener('click', delet);

function delet(){
    content.innerHTML = " ";
};

function startlaunch(e){
    if(e.keyCode === 13){
        document.getElementById("container").append(" ");
        start()
        space.value = "";
    }
};



function start(){


    var input = document.getElementById("search").value
    
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=5fqtTwrgKvAHFVOvC6W5wJlFO0Q9yyZL&limit=12`);
    xhr.done(function(response) { 
    
    console.log("success got data", response); 

    var giffs = response.data

    for ( g in giffs ){
        $('#container').append("<img src='"+giffs[g].images.original.url+"' style='height:350px, width:350px;'/>")
    }

    }); 
}

