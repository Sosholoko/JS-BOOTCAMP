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

//For selecting * from whole table

// db.select().table('actors')
//     .then(data => {
//         console.log(data);
//     })

//For selecting specific item from table

// db.select('first_name').from('actors')
// .then(data => {
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e);
// })

//Other way of getting info

// db('actors')//table name
// .select('last_name')//info from table
// .then(data => {
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e);
// })

//Update 

// db('actors')
// .where({first_name:' George'})
// .update({first_name:'George'})
// .then(data =>{
//     console.log(data)
// })
// .catch(e=>{
//     console.log(e)
// }); //return the number of rows affected

// db('actors')
// .where({last_name:' Clooney'})
// .update({last_name:'Clooney'})
// .returning(['last_name'])
// .then(data =>{
//     console.log(data)
// })
// .catch(e=>{
//     console.log(e)
// });

//insert new data

// db('actors')
// .insert(
//         {first_name: 'Harry',
//         last_name: 'Potter',
//         birth_date: '1992-08-16',
//         number_oscars: 3,
//         salary: 10000,
//         nationality: 'British',
//         email: "harry@potter.com"}
//         )
// .returning('*')
// .then(data =>{
//     console.log(data)
// })
// .catch(e=>{
//     console.log(e)
// });


//delete 

// db('actors')
// .del()
// .where({last_name: 'stone'})
// .then(data =>{
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e)
// })





