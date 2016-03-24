

app.controller('videoHistoryController', ['$scope','DataService', 
	function( $scope, DataService ){
		$scope.params = {};

		$scope.backToMain = function(){
			$('#user-video-history-container').fadeOut( 'fast' );
			$('#slide-container').fadeIn( 'slow' );
		}

		$scope.showHistory = function( videos ){
			GLOBAL.onFingerprint( function( key ){
				DataService.videosViewHistory({ fingerPrint:key }, {}).
					then( function( response ){
						$scope.setHistoryView( videos, response.data ) ;
				});
			});
		}

		$scope.setHistoryView = function( videos, logs ){
			var video;
			$scope.params.logs = _.map( logs, function( log ){
				video = _.where( videos, { id: log.videoId })[0];

				log = _.extend( log, { imgUrl: video.imgUrl, videoUrl: video.url, title: video.title });

				return log;
			});
		}

		$scope.humanizedDuration = function( from , to ){
			var diff =  moment( to ).diff(moment( from ));
			var mins = diff.asMinutes();
			if( mins > 1 )
				return mins + ' mins';

			return diff.asSeconds() + ' seconds';
		}
}]);