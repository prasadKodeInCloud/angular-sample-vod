
app.factory('DataService', [ '$http', function( $http ) {

	return {

		videos: function(){
			return $http.get( CONFIG.MOVIES_API + '/movies');
		}
	}
}]);