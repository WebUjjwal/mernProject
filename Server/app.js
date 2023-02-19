const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('./db/connection');
// const User = require('./model/userSchema')

app.use(express.json());

// link router file
app.use(require('./router/auth'));

dotenv.config({ path: './config.env' })
const PORT = process.env.PORT;
const DB = process.env.DATABASE;
// const DB = 'mongodb+srv://ujjwal:584268590@cluster0.4s1ds1m.mongodb.net/mernstack?retryWrites=true&w=majority'


mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useCreatIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('connected to database')
}).catch((err) => console.log('have some issue to connect our database'));

//middleware
const middleware = (req, res, next) => {
    console.log('this is my middleware')
    next();
};


// app.get('/', (req, res) => {
//     res.send('hello from home')
// });

app.get('/about', middleware, (req, res) => {
    res.send('hello from About')
});

app.get('/contact', (req, res) => {
    res.send('hello form Contact')
});

app.listen(3000, () => {
    console.log(`server is running Port ${PORT}`)
});

// console.log('run at the time')