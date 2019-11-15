// bring express
const express = require ('express');
const app = express()

//  routes
app.get('/',(req,res)=>{
    res.send('booyah!');
})
// donuts routes

// CREATE
// ADD A NEW DONUT
app.post('/donuts', (req, res)=>{
    // gets an object via req.body
    res.send('placeholder')
})



// GET ALL DONUTS
app.get('/donuts', (req, res)=>{
res.send('sorry no donut yet')
})

// GET A SINGLE DONUT
app.get('/donut/:id', (req, res)=>{

})

// DELETE DONUTS
app.delete('/donuts/:id', (req,res)=>{
    res.send('a single donut');
})

// UPDATE A DONUT
app.patch('/donuts/:id', (req,res)=>{
    res.send('placeholder update');

})
// listen on port
app.listen(300, function () {
    console.log('Ready');

})