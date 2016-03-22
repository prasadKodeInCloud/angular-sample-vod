

app.controller('videoPlayerController', ['$scope','DataService', 
	function( $scope, DataService ){
		$scope.params = {
			video:null
		};

		$scope.init = function(){
			console.log('#### init modal');
		}

		$scope.loadVideo = function( video ){
			$scope.params.video = video;
			//cannot use angular binding for source url due to url trust policy.
			$('#video-player-modal video').attr('src', video.url );
			
			$('#video-player-modal').modal('show');
		}

}]);