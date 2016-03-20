

function setup( app,handlers) {
	console.log("set router ####");
	app.get('/api/user', handlers.user.get );
	app.post('/api/users', handlers.user.create );
	app.post('/api/find', handlers.user.find );	

	app.get('/', function(req, res){
 		res.send('<h1>Hello, welcome to VOD');
	});
}
 
exports.setup = setup;