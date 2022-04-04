console.log('hello');

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