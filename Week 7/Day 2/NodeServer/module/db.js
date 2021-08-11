const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port: '5432',
        user : 'sashakharoubi',
        password : 'aydias',
        database : 'Hollywood'
    }
    });
    
const dbloc = () => {
    return db.select('location').from('department');
}

const createUser = (username, password)=>{
    return db('users')
    .insert({
        username,
        password
    })
    .returning('*');
}


    module.exports ={
        location: dbloc,
        createUser
    };