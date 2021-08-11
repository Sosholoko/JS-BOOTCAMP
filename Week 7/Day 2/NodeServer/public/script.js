console.log('Hello')

const login = () =>{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username)
    console.log(password)

    fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    })

}

const createSelect = (cities)=>{
    const root = document.getElementById('root');
    const select = document.createElement('select');
    root.appendChild(select)
    cities.forEach((item, i)=>{
        let opt = new Option(item.location);
        select.appendChild(opt);
    })
}

const getCity = ()=>{
    fetch('http://localhost:4000/getCity')
    .then(res => res.json())
    .then(data=>{
        createSelect(data);
    })
    .catch(e=>{
        console.log(e)
    })
};

getCity()

