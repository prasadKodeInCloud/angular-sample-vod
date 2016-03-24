var config = require('./config');
var winston = require('winston');
var mongo = require('mongoskin');
var server = require('./server');

winston.add(winston.transports.File, {
	filename: config.logger.api
});

//Log all uncaught exceptions into exceptions.log
winston.handleExceptions(new winston.transports.File({
	filename: config.logger.exception
}));

var dbConfig =  config.dbProduction; 

var db = mongo.db('mongodb://'+ dbConfig.mongo.url +'/' + dbConfig.mongo.database , { safe:true });

//create a short cut to convert id to object Id
db.toObjectId = mongo.ObjectID.createFromHexString;
//db.bind('users');
db.bind('users');
db.bind('activity_logs');

server.start( config, db );



