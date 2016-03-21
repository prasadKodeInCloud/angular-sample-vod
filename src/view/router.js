

function setup( app,handlers) {
	app.get('/', function(req, res){
 		res.sendFile( ROOT_PATH + '/public/app/index.html'); 
	});

	console.log("set router ####");
	app.get('/api/user', handlers.user.get );
	app.post('/api/users', handlers.user.create );
	app.post('/api/find', handlers.user.find );	
}
 
exports.setup = setup;