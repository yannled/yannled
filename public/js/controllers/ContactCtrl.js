angular.module('ContactCtrl', []).controller('ContactController', function($scope, $http) {
	
	$scope.submitEmail= function(formInfo){
		console.log(formInfo);
		$http.get('/send').success(function(formInfo){
			console.log('server is calling')
		}).error(function(){
			alert('an unexpected error ocurred! ');
		});
	}
});