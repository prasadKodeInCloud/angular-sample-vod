
app.factory('DataService', [ '$http', function( $http ) {

	return {

		videos: function(){
			return $http.get( CONFIG.MOVIES_API + '/movies');
		},
		saveLog: function( log ){
			return $http.post( CONFIG.SERVICE_API + '/activities', log );
		},
		saveUser: function( key ){
			var user = {
				_id: key,
        		fingerPrint:key,
        		timezoneOffset: (new Date()).getTimezoneOffset(),
        		userAgent: window.navigator.userAgent
			};

			return $http.post( CONFIG.SERVICE_API + '/users', user );
		}
	}
}]);