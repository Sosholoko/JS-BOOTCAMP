const axios = require('axios');

const getUsers = async()=>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = await res.data;
        return users;
    }
    catch(e){
        console.log(e)
    }
}

module.exports = {
    users: getUsers
}