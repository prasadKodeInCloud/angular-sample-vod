

function UserHandler( db ){
	console.log("UserHandler Created");
	
	var usersMdl = require('../model/users.mdl').load( db, { col:'users'} );

	return {
		
		create:function( req, res ){
			res.json({ msg: 'created user'});
		},
		find:function( req, res ){
			res.json({ msg: 'created user'});
		},
		get:function( req, res ){
			usersMdl.get( req.params, function( result ){
				res.json( result );
			});
		}
	}
}

exports.load = UserHandler;

