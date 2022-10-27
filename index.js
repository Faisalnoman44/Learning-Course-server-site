const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const catagories = require('./data/catagories.json')


app.get('/', (req, res) =>{
    res.send('data send');
})

app.get('/catagories', (req, res) =>{
    res.send(catagories)
})

app.get('/catagories/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = catagories.find(catagory => catagory.id === id);
    res.send(selectedCourse);
})

app.listen(port, () =>{
    console.log('server work', port);
})