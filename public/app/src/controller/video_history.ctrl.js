

app.controller('videoHistoryController', ['$scope','DataService', 
	function( $scope, DataService ){

		$scope.backToMain = function(){
			$('#user-video-history-container').fadeOut( 'fast' );
			$('#slide-container').fadeIn( 'slow' );
		}
}]);