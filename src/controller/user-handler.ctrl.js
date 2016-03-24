

function UserHandler( db ){
	console.log("UserHandler Created");
	
	var usersMdl = require('../model/users.mdl').load( db );

	return {
		
		create:function( req, res ){
			usersMdl.create( req.body, function( result ){
				res.json( result );
			});	
		},
		find:function( req, res ){
			usersMdl.find( req.body.params, req.body.options, function( result ){
				res.json( result );
			});
		},
		get:function( req, res ){
			usersMdl.get( { _id: req.params.userId }, function( result ){
				res.json( result );
			});
		}
	}
}

exports.load = UserHandler;

