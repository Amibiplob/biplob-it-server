const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;


const data =require('./data/fakeDB.json');



app.get('/', (req ,res) =>{
    res.send(data);
});







app.listen(Port , () =>{
    console.log('server is working' , Port);
});