

function UserHandler(){
	console.log("UserHandler Created");
	
	return {
		
		create:function( req, res ){
			res.json({ msg: 'created user'});
		},
		find:function( req, res ){
			res.json({ msg: 'created user'});
		},
		get:function( req, res ){
			res.json({msg:'Prasad Hewage'});
		}
	}
}

exports.load = UserHandler;
