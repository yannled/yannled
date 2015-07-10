angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.tagline = 'Will Knock Your Socks Off';	
	$scope.templates =
    [ { name: 'about.html', url: 'PartialViews/about.html'},
      { name: 'portfolio.html', url: 'PartialViews/portfolio.html'} ];
});