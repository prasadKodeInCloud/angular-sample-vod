
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

AbstractModel.prototype.find = function( selector, callback ){
	this.db[this.col].find( selector ).toArray( function( err, result ){
		if( callback )
			callback( result );
	});
}

AbstractModel.prototype.create = function( obj, callback ){
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