
angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.tagline = 'Will Knock Your Socks Off';	
	$scope.templates =
    [ { name: 'services.html', url: 'PartialViews/services.html'},
      { name: 'portfolio.html', url: 'PartialViews/portfolio.html'},
	  { name: 'about.html', url: 'PartialViews/about.html'},
	  { name: 'contact.html', url: 'PartialViews/contact.html'} ];
});