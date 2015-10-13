angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.title = "Yann Lederrey";
	$scope.tagline = 'Votre site selon vos besoins !';
	$scope.tagline2 = 'Des prix bas sur le marché !';
	$scope.tagline3 = 'Adapté aux smartphone et tablettes !';	
	$scope.templates =
    [ { name: 'services.html', url: 'PartialViews/services.html'},
      { name: 'portfolio.html', url: 'PartialViews/portfolio.html'},
	  { name: 'about.html', url: 'PartialViews/about.html'},
	  { name: 'contact.html', url: 'PartialViews/contact.html'} ];
});