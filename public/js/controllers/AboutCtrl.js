angular.module('AboutCtrl', []).controller('AboutController', function($scope) {
	$scope.index = 1;
	$scope.steps =
    [
      { firstTitle: 'Apprentissage',
		  secondTitle:'Ecole Polytechnique Fédérale de Lausanne, EPFL',
		  content:"Apprentissage effectué au sein du service de l'Enacit2 à l'EPFL, un apprentissage général en informatique m'ayant permis de toucher à une grande partie du métier.", imgSrc:'../../img/EPFL.jpg',
		  linkName:'Enacit2',
		  link:'http://enacit2.epfl.ch/',},
		  
		  
	  { firstTitle: "Cours d'apprentissage",
		  secondTitle:'Ecole Professionel de Lausanne, EPSIC',
		  content:"Cours de maturité professionel et d'informatique suivis à l'Epsic.",
		  imgSrc:'../../img/epsic.png',
		  linkName:'EPSIC',
		  link:'http://www.epsic.ch/', },
		  
		  
	  { firstTitle: 'Premiers Sites Internet',
		  secondTitle:"",
		  content:"Premier site web pour un client, en partenariat avec Roxanne Borloz, Graphiste.",
		  imgSrc:'../../img/roxanne.png',
		  linkName:'Roxanne Borloz, Graphiste ',
		  link:'http://www.roxanne-borloz.ch/',},
		  
	  { firstTitle: 'Obtention De mon CFC et de ma Maturité',
		  secondTitle:"",
		  content:"",
		  imgSrc:'http://placehold.it/200x200', } ];	
});