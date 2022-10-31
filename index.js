const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;


const data =require('./data/fakeDB.json');



app.get('/', (req ,res) =>{
    res.send(data);
});
app.get('/:id', (req ,res) =>{
    const id = req.params.id;
    const getSingleData = data?.find(SD => SD.id == id);

    res.send(getSingleData);
});







app.listen(Port , () =>{
    console.log('server is working' , Port);
});