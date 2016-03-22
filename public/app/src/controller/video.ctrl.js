

app.controller('videoController', ['$scope','DataService', function( $scope, DataService ){
	
	$scope.params = {};
	$scope.scrollPos = 0;
	$scope.scrollWidth = 800;

	$scope.init = function(){
		$scope.setFingerPrint();
		$scope.showVideoBar();
	}

	$scope.play = function(){
		console.log( this.video );
		angular.element('#video-player-modal').scope().loadVideo( this.video );
	}

	$scope.setFingerPrint = function(){
		new Fingerprint2({}).get(function(result){
			console.log('key: ', result );
			localStorage.setItem('VOD_U', result );
		});
	}

	$scope.showVideoBar = function(){
		DataService.videos().then( function( response ){
			$scope.params.videos = _.map( response.data.entries, function( video ){
				if(video.images && video.images.length > 0 ) 
					video.imgUrl = video.images[0].url;

				video.imgUrl = video.imgUrl || CONFIG.DEFAULT_VIDEO_TILE;
				video.url = video.contents[0].url;
				video.title = video.title.trim();
				video.name = video.title.length > 20? video.title.substr(0, 20) + '...' : video.title;

				return video;
			});

			console.log($scope.params.videos);

		});
	}

	$scope.scroll = function( direction ){
		if( direction == 'LEFT')
			$scope.scrollPos -= $scope.scrollWidth;
		else
			$scope.scrollPos += $scope.scrollWidth;

		$('#slideContainer').animate({
            scrollLeft: $scope.scrollPos
        }, 800);
	}
}]);