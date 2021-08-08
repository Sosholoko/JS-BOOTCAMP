// const http = require('http');

// const server = http.createServer( (req, res)=>{
//     console.log('I am listening');
//     // res.end('<h1>Hello</h1>');
//     const user = {
//         name: 'Sasha',
//         username: 'Sosholok00'
//     }
//     console.log('headers', req.method);
//     console.log('URL', req.url);
//     res.end(JSON.stringify(user));
// })

// server.listen(3000);


const exp = require('express');
const app = exp();

app.get('/', (req, res)=>{
    let obj = {
        user: 'Sasha',
        username: 'Sosholoko'
    }
    res.send(obj);
    //res.send('Hello from an express server A');

});

app.listen(3000);