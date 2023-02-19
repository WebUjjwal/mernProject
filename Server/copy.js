

const express = requrie('express');
const app = require()


const mongoose = require('mongoose')

const DB = '';


mongoose.connect(DB, {

}).then(()=> [
    console.log('')
]).catch((err => console.log('')))




app.get(('/'), (req, res)=> {
    res.send('from home')
});

app.get(('/about'), (req, res)=> {
    res.send('from about')
});

app.get(('/contact'), (req, res)=> {
    res.send('from contact')
});


app.listen(3000, () => {
    console.log('server ir running port 3000')
});

