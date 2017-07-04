var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ecommerce', ()=>{
     console.log('connect to Database');
});



var items = require('./routes/items')
var customers = require('./routes/customer')
var carts = require('./routes/carts')

var app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/items',items);
app.use('/customers', customers);
app.use('/carts', carts)

app.listen(3000, ()=>{
     console.log('on ');
})

module.exports = app;
