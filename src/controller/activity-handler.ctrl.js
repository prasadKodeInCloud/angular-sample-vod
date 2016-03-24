
function ActivityHandler( db ){

	var activityLogsMdl = require('../model/activity-logs.mdl').load( db );

	return {
		
		create:function( req, res ){
			activityLogsMdl.create( req.body, function( result ){
				res.json( result );
			});	
		},
		find:function( req, res ){
			activityLogsMdl.find( req.body.params, req.body.options, function( result ){
				res.json( result );
			});
		},
		get:function( req, res ){
			activityLogsMdl.get( { _id: req.params.activityId }, function( result ){
				res.json( result );
			});
		}
	}
}

exports.load = ActivityHandler;

