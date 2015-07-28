angular.module('AboutCtrl', []).controller('AboutController', function($scope) {
	$scope.index = 1;
	$scope.steps =
    [ { firstTitle: 'Scolaire',secondTitle:'école des trois sapins, Echallens', content:"j'ai passé ma scolarité secondaire à Echallens, dans le collègue des trois sapins, anciennement en 'G'", imgSrc:'http://placehold.it/200x200', },
      { firstTitle: 'Apprentissage',secondTitle:'Ecole Polytechnique Fédérale de Lausanne, EPFL', content:"J'ais effectué mon apprentissage au sein du service de l'Enacit2 à l'EPFL, un apprentissage général en informatique m'ayant permis de toucher à une grande partie du métier.", imgSrc:'http://placehold.it/200x200',linkName:'Enacit2',link:'http://enacit2.epfl.ch/',},
	  { firstTitle: 'Scolaire',secondTitle:'école des trois sapins, Echallens', content:"j'ai passé ma scolarité secondaire à Echallens, dans le collègue des trois sapins, anciennement en 'G'", imgSrc:'http://placehold.it/200x200', },
	  { firstTitle: 'Scolaire',secondTitle:'école des trois sapins, Echallens', content:"j'ai passé ma scolarité secondaire à Echallens, dans le collègue des trois sapins, anciennement en 'G'", imgSrc:'http://placehold.it/200x200', } ];	
});