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

//All modules exported

const exp = require('express');
const app = exp();
const cors = require('cors');
const users = require('./modules/users.js')

//to get the info from the post request
const bp = require('body-parser');


//two lines that allows post request to read the body of the post in the HTML
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(cors());

//main route, main page 
app.use('/', exp.static(__dirname + '/public'))


app.get('/robots', (req, res)=>{
    users.users()
    .then(data =>{
        res.send(data);
    })
    .catch(e =>{
        res.send({message: e.message})
    })
})


app.get('/shop/:item', (req, res)=>{
    console.log(req.params);
    if(typeof req.params.item != 'string'){
        res.send('ERROR 404, NOT A STRING')
    }
    else{
        res.send(`<h1>You searched for ${req.params.item}</h1>`)
    }
})

app.get('/pic', (req, res)=>{
    res.sendFile(__dirname + '/public/pic.html')
})

app.get('/form', (req, res)=>{
    res.sendFile(__dirname + '/public/form.html')
})

app.get('/about', (req, res)=>{
    //same as Rendertemplate in flask
    res.sendFile(__dirname + '/public/about.html')
    //same as redirect in flask between routes
    //res.redirect('/login')
})

app.get('/result', (req, res)=>{
    const {email, name, message} = req.query;
    console.log(req.query);
    res.send(`<h2>${name} has sent a message</h2>
                <h2>Message : ${message}</h2>
                <h2>Email : ${email}</h2>`);
})


//added route with different url => (login)
app.get('/login', (req, res)=>{
    
    const {username, password} = req.query;
    res.send(`<h1>Hello ${username}</h1>`);
    console.log(req.query);
    //res.send('Hello from an express server A');

});

app.post('/login', (req, res) =>{
    const {username, password} = req.body;
    res.send(`<h1>Hello ${username}</h1>`);
    console.log(req.body);
})

app.listen(3000);