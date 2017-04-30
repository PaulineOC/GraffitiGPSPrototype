var express = require('express');
var app = express();
var db = require('./db.js');
var path = require('path');
var bodyParser = require('body-parser');
var handlebars = require('hbs');
//Mongoose
var mongoose = require('mongoose');
var streetArt = mongoose.model('streetArt');
mongoose.Promise = global.Promise;

//For Images
var fs = require('fs');
var multer = require('multer');
//Saves to memory storage
var upload = multer({ storage: multer.memoryStorage({}) });

//Port setting
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// homepage
app.get('/',function(req,res){
	res.render('index');
});

app.get('/view', function(req,res){
	res.render('view');
});

app.get('/add', function(req,res){
	res.render('add');
});

// after clicking add
app.post('/addObj',function(req,res){
	console.log("hi");
	// console.log("adding object:\n"+req.body);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// app.listen(8080, '127.0.0.1');
