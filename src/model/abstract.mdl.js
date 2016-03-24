
var moment = require('moment');
var utcDate = function(){	
	return new Date( moment().toISOString() );
};

function AbstractModel( db ){
	this.db = db;
	this.col = '';
}

AbstractModel.prototype = new AbstractModel();

AbstractModel.prototype.constructor = AbstractModel;

/**
 * Find item by given selector
 * @param  {Object}   selector 
 * @param  {Function} callback 
 * @return {Object/null}       item by selected query 
 */
AbstractModel.prototype.get = function( selector, callback ){
	this.db[this.col].findOne( selector, function( err, result ){
		if( callback )
			callback( result );
	});
}

/**
 * Search for collection items for a given selector and options
 * @param  {Object}   selector 
 * @param  {Object}   options  
 * @param  {Function} callback 
 * @return {Object/null}           
 */
AbstractModel.prototype.find = function( selector, options, callback ){
	options = options || {};

	options.sort = options.sort || { created: -1 };
	options.skip = options.skip || 0;
	options.limit = options.limit || 50;

	this.db[this.col].find( selector ).sort( options.sort ).skip( options.skip ).
		limit( options.limit ).toArray( function( err, result ){
		if( callback )
			callback( result );
	});
}

AbstractModel.prototype.create = function( obj, callback ){
	obj.created = utcDate();
	obj.updated = obj.created;
	this._insert( obj, callback );
}

AbstractModel.prototype._insert = function( obj, callback ){
	this.db[this.col].insert( obj, function( err,result){
		callback({ _id: result[0] });
	});
}

/**
 * Remove an item by a given selector
 * @param  {Object}   selector 
 * @param  {Function} callback 
 * @return {Object}            
 */
AbstractModel.prototype.remove = function( selector, callback ){
	this.db[this.col].remove( selector, function( err, result ){
		if( callback )
			callback( result );
	});
}

exports.class = AbstractModel;