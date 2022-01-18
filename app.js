var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Connecting with mongoose




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/test', (req, res)=>{
    res.send({msg: "Testing CI/CD"})
})

// Form page
app.get('/submit', (req,res)=>{
 res.sendFile(__dirname+'form.html');

})

app.get('/mon', (req, res)=>{
    res.send('uri'+process.env.URI);
})

// Testing form data handling
app.post('/submit', (req, res)=>{
    res.send('hey, you submitted '+ req.body.num);
})


module.exports = app;
