

app.controller('videoController', ['$scope','DataService', function( $scope, DataService ){
	
	$scope.params = {};

	$scope.init = function(){
		$scope.showVideoBar();
	}

	$scope.showVideoBar = function(){
		DataService.videos().then( function( response ){
			$scope.params.videos = _.map( response.data.entries, function( video ){
				if(video.images && video.images.length > 0 ) 
					video.imgUrl = video.images[0].url;

				video.imgUrl = video.imgUrl || CONFIG.DEFAULT_VIDEO_TILE;
				video.url = video.contents[0].url;

				return video;
			});

			console.log($scope.params.videos);

		});
	}

}]);