const exp = require('express');
const app = exp();
const cors = require('cors');
const axios = require('axios');
const dbb = require('./modules/db.js')
const bp = require('body-parser');
const db = require('./modules/db.js');

app.use(cors());
app.use(bp.urlencoded({extended:false}))
app.use(bp.json());
//app.use('/', exp.static(__dirname + '/public'))


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

app.listen(4000);