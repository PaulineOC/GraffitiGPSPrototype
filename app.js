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

app.get('/AddObj', function(req,res){
	res.render('add');
});


app.get('/view1', function(req,res){
	res.render('view1');
});


app.get('/view2', function(req,res){
	res.render('view2');
});

app.post('/AddObj',upload.single('pic'),function(req,res) {

	console.log(req.body);
	var base64 = req.file.buffer.toString('base64');
	
	
	var newObj = new streetArt({
		'title': req.body.title.toLowerCase(),
		'pic': base64,
	});
	//Further Material:
	newObj.save(function(err,item, count){
		if (err){
			console.log(err);
		}
		else{
			res.redirect('/');
		}
	});
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

