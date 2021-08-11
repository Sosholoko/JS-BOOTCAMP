const exp = require('express');
const app = exp();
const cors = require('cors');
const axios = require('axios');
const dbb = require('./module/db.js')
const bp = require('body-parser');

app.use(cors());
app.use(bp.urlencoded({extended:false}))
app.use(bp.json());
app.use('/', exp.static(__dirname + '/public'))


app.get('/getCity', (req, res)=>{
    dbb.location()
    .then(data =>{
        res.send(data);
        // console.log(data)
        //res.send(`<h2>${data}</h2>`)
    })
    .catch(e =>{
        res.send({message: e.message})
    })
})

app.post('/login', (req, res)=>{
    console.log(req.body)
    dbb.createUser(req.body.username, req.body.password)
    .then(data=>{
        console.log(data);
        res.send({message:'OK'})
    })
    .catch(e=>{
        res.send({message:e.message})
    })
})

app.listen(4000);