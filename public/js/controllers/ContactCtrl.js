angular.module('ContactCtrl', []).controller('ContactController', function($scope, $http) {
 $scope.postData = {};
 
    $scope.postMail = function (contact) {
      //Check form validation
      if ($scope.contactForm.$valid) {
      $scope.message = "Merci pour votre message.";
      // wrap all your input values in $scope.postData
      $scope.postData = angular.copy(contact);

      $http.post('/api/contact', $scope.postData)
        .success(function(data) {
        })
        .error(function(data) {
        });   
      return
      }  
      else {
      $scope.message = "Une erreur c'est produite, veuillez remplir correctement tous les champs.";
      return
      }   
    };
  });