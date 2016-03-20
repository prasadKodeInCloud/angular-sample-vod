
var express = require('express');
var router = require('./src/view/router');

// pull information from HTML POST (express4)
var bodyParser = require('body-parser');
// simulate DELETE and PUT (express4)
var methodOverride = require('method-override');

ROOT_PATH = __dirname;

var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

var validateAuth = function(req, res, next) {
  console.log('got request');
  next();
}


app.use(allowCrossDomain);
app.use(validateAuth);
app.use(express.static( __dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'})); 
// parse application/json           
app.use(bodyParser.json());     
// parse application/vnd.api+json as json                                
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());
 
function start(config, db) {
	var handlers = {
		user: require('./src/controller/userHandler').load( db ),
	    //history: require('./src/controller/historyHandler').load(db)
	};
	
	router.setup( app, handlers);
	var port = process.env.PORT || config.nodeServer.port;
	app.listen(port, process.env.HOST || '0.0.0.0' );
	
	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
}

exports.start = start;
exports.app = app;