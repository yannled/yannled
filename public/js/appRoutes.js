angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		 }).
      when('/services',{
        templateUrl: 'views/home.html',
        controller: 'MainController'
      }).
	  when('/portfolio',{
        templateUrl: 'views/home.html',
        controller: 'MainController'
      }).
	  when('/about',{
        templateUrl: 'views/home.html',
        controller: 'MainController'
      }).
	  when('/contact',{
        templateUrl: 'views/home.html',
        controller: 'MainController'
      }).
    otherwise({
        redirectTo: function() {
        window.location = "404-pacman-master/404.html";
    }
      });

	$locationProvider.html5Mode(true);
}]);