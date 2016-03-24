
var AbstractModel = require('./abstract.mdl').class;


function UsersModel( db ){
	this.db = db;
}

UsersModel.prototype = new AbstractModel();

/**
 * Find user by given selector
 * @param  {Object}   selector 
 * @param  {Function} callback 
 * @return {Object/null}       user by selected query 
 */
UsersModel.prototype.get = function( selector, callback ){
	this.db.users.findOne( selector, function( err, result ){
		if( callback )
			callback( result );
	});
}

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
			self.db.users.insert( user, function( err,result){
				callback({ _id: result[0] });
			});
		}
	});
}

/**
 * Remove a user by a given selector
 * @param  {Object}   selector 
 * @param  {Function} callback 
 * @return {Object}            
 */
UsersModel.prototype.remove = function( selector, callback ){
	this.db.users.remove( selector, function( err, result ){
		if( callback )
			callback( result );
	});
}

UsersModel.constructor = UsersModel;

exports.load = function( db ){
	return new UsersModel( db );
}