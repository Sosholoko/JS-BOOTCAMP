let form = document.getElementById("form");
form.addEventListener("submit", event=>{
    event.preventDefault();
    let cred = {
        Firstname: document.getElementById("firstname").value,
        Lastname: document.getElementById('lastname').value
    }
    document.getElementById("output").innerHTML = JSON.stringify(cred);
});


//AJAX
let res = document.getElementById("res");
let idd = document.getElementById("id");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.onreadystatechange = function(){
    if (xhr.readyState == 0){
        console.log("unsent");
    }
    else if (xhr.readyState == 1){
        console.log('open called');
    }
    else if (xhr.readyState == 2){
        console.log("response headers received")
    }
    else if ( xhr.readyState == 3){
        console.log("response is loading");
    }
    else if ( xhr.readyState == 4){
        console.log("xhr object = " , xhr);
    }
    // request complete
    console.log("request complete")
    
    
    if (xhr.status != 200) { // analyze HTTP status of the response
    	//DISPLAY ERROR HERE
    } else if (xhr.status === 200) {
        //make the response an object to manipulate
        const data = JSON.parse(xhr.responseText);
        
        //loop through item of the object and diplay info
        for(item of data){
            let p = document.createElement("p");
            p.innerText = `${item["name"]}, ${item["email"]} ,${item["address"]["city"]}`;
            document.getElementById("bloc").appendChild(p);
        }
    }
};