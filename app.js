var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const sub = require('./Controller/submit')

dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const submit = require('./Controller/submit');

var app = express();

// Connecting with mongoose
mongoose.connect(process.env.CUSTOMCONNSTR_URI, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
.then(()=> console.log('Connection success with atlas'))
.catch((err)=> console.log(err))


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
 res.sendFile(__dirname+'/form.html');

})

// app.get('/mon', (req, res)=>{
// res.send('uri'+process.env.CUSTOMCONNSTR_URI);
//})

// Testing form data handling
app.post('/submit', sub)


module.exports = app;
