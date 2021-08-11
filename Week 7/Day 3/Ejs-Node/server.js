console.log('OK');

const exp = require('express');
const env = require('dotenv');
const cors = require('cors');
const axios = require('axios');

const app = exp();
env.config();

//app.use('cors');
app.set('view engine', 'ejs');
//app.use('/', exp.static(__dirname+ '/public'));

app.get('/', (req,res)=>{
    res.render('index')
});
app.get('/about', (req,res)=>{
    res.render('about')
});
app.get('/posts', (req, res)=>{
    getPost()
    .then(data=>{
        res.render('posts', {
            posts:data
        })
    })
    .catch(e=>{
        res.render('posts', {
            posts:[]
        })
    })
})

const getPost = async()=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        return await response.data;
    }
    catch(e){
        console.log(e);
    }
}

app.listen(process.env.PORT, ()=>{console.log('Listening on port' +" "+ process.env.PORT)});