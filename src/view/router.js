

function setup( app,handlers) {
	app.get('/', function(req, res){
		console.log('User Info: ',req.headers['user-agent'],  req.headers['x-forwarded-for'] || req.connection.remoteAddress);
 		res.sendFile( ROOT_PATH + '/public/app/index.html'); 
	});

	console.log("set router ####");
	app.get('/api/users/:userId', handlers.user.get );
	app.post('/api/users', handlers.user.create );
	app.post('/api/users/find', handlers.user.find );	

	app.get('/api/activities/:activityId', handlers.activity.get );
	app.post('/api/activities', handlers.activity.create );
	app.post('/api/activities/find', handlers.activity.find );	
}
 
exports.setup = setup;