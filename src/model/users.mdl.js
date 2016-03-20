
var AbstractModel = require('./abstract.mdl').class;


function UsersModel( db ){
	this.db = db;
}

UsersModel.prototype = new AbstractModel();

UsersModel.prototype.get = function( params, callback ){
	if( callback )
		callback({ user:'Prasad Hewage'});
}

UsersModel.constructor = UsersModel;

exports.load = function( db ){
	return new UsersModel( db );
}