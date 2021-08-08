const axios = require('axios');

const getUser = async() =>{
    
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(res.data);
        }
        catch(e){
            console.log(e)
        }
    }
    
    getUser();

    module.exports = {
        userFunc: getUser
    };

