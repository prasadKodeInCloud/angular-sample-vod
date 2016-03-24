
var AbstractModel = require('./abstract.mdl').class;


function ActivityLogModel( db ){
	this.db = db;
	this.col = 'activity_logs';
}

ActivityLogModel.prototype = new AbstractModel();


ActivityLogModel.constructor = ActivityLogModel;

exports.load = function( db ){
	return new ActivityLogModel( db );
}