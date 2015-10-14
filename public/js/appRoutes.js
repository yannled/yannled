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
      when('/error404',{
        templateUrl: 'views/error404.html',
        controller: 'MainController'
      }).

      otherwise({
        redirectTo: '/error404'
      });

	$locationProvider.html5Mode(true);
}]);