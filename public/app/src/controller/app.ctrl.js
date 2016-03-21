
app = angular.module('vod', [ 'ngRoute']);

app.config(function ( $routeProvider, $locationProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
});

