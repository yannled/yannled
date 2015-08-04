angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.title = "YoUr Web";
	$scope.tagline = 'Yann Lederrey';	
	$scope.templates =
    [ { name: 'services.html', url: 'PartialViews/services.html'},
      { name: 'portfolio.html', url: 'PartialViews/portfolio.html'},
	  { name: 'about.html', url: 'PartialViews/about.html'},
	  { name: 'contact.html', url: 'PartialViews/contact.html'} ];
});