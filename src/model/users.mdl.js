
var AbstractModel = require('./abstract.mdl').class;

function UsersModel( db ){
	this.db = db;
	this.col = 'users';
}

UsersModel.prototype = new AbstractModel();


/**
 * Create a new user if no user user is found for _id.
 * else return the existing user
 * @param  {Object}   user   User object
 * @param  {Function} callback callback function to execute
 * @return {String}            userId
 */
UsersModel.prototype.create = function( user, callback ){
	var self = this;
	this.get({ _id: user._id }, function( result ){
		if( result )
			callback({ _id: result._id });
		else{
			self._insert( user,callback );
		}
	});
}

UsersModel.constructor = UsersModel;

exports.load = function( db ){
	return new UsersModel( db );
}