
requirejs.config({
    baseUrl: 'app',
    paths: {
        lib: './lib',
        angular:'./lib/angular',
        ctrl: './src/controller'
    }
});

requirejs([ 
	'angular/angular.min',
	'angular/angular-route.min', 
	'lib/jquery/jQuery-2.1.3.min' 
	], function(){
		console.log('loaded scripts');
		requirejs([
			'ctrl/app.ctrl'
			], function(){

		});
});