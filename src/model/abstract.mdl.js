
function AbstractModel( db ){
	this.db = db;
}

AbstractModel.prototype = new AbstractModel();

AbstractModel.prototype.constructor = AbstractModel;

AbstractModel.prototype.create = function(){

}

exports.class = AbstractModel;