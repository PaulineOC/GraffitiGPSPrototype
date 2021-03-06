var mongoose = require('mongoose');
var URLSlugs = require('mongoose-url-slugs');
var streetArt = new mongoose.Schema({
  title: {type: String, default:''},
  loc: {type: Number , coordinates: []},

  pic: {type: String, default:''}
});

 streetArt.plugin(URLSlugs('title'));
 mongoose.model('streetArt', streetArt);

// is the environment variable, NODE_ENV, set to PRODUCTION? 
if (process.env.NODE_ENV == 'PRODUCTION') {
  console.log("in production");
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 var fs = require('fs');
 var path = require('path');
 var fn = path.join(__dirname, 'config.json');
 var data = fs.readFileSync(fn);
 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 var conf = JSON.parse(data);
 var dbconf = conf.dbconf;
} 
else {
 // if we're not in PRODUCTION mode, then use
 //dbconf = 'mongodb://pauline:mongo123@ds115918.mlab.com:15918/heroku_kcl276gt';
 dbconf='mongodb://localhost/streetArt';
}

mongoose.connect(dbconf);