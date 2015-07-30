angular.module('AboutCtrl', []).controller('AboutController', function($scope) {
	$scope.index = 1;
	$scope.steps =
    [ { firstTitle: 'Scolaire',secondTitle:'école des trois sapins, Echallens', content:"j'ai passé ma scolarité secondaire à Echallens, dans le collègue des trois sapins, anciennement en 'G'", imgSrc:'http://placehold.it/200x200', },
      { firstTitle: 'Apprentissage',secondTitle:'Ecole Polytechnique Fédérale de Lausanne, EPFL', content:"J'ais effectué mon apprentissage au sein du service de l'Enacit2 à l'EPFL, un apprentissage général en informatique m'ayant permis de toucher à une grande partie du métier.", imgSrc:'http://placehold.it/200x200',linkName:'Enacit2',link:'http://enacit2.epfl.ch/',},
	  { firstTitle: "Cours d'apprentissage",secondTitle:'Ecole Professionel de Lausanne, EPSIC', content:"Pendant les quatre années d'apprentissage, j'ai suivis, à l'Epsic Mes cours d'informatiques ainsi que mes cours de maturité", imgSrc:'http://placehold.it/200x200',linkName:'EPSIC',link:'http://www.epsic.ch/', },
	  { firstTitle: 'Premiers Sites Internet',secondTitle:"", content:"Début des création de site web pour des clients, dans un but lucratif. En partenariat avec Roxanne Borloz, Designeuse.", imgSrc:'http://placehold.it/200x200',linkName:'Roxanne Borloz, designeuse',link:'http://www.roxanne-borloz.ch/',},
	  { firstTitle: 'Obtention De mon CFC et de ma Maturité',secondTitle:"", content:"", imgSrc:'http://placehold.it/200x200', } ];	
});