angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope) {
	$scope.steps =
    [ { imgSrc:'../../img/noway.png' ,link:'http://www.no-way-band.com/', },
      { imgSrc:'../../img/sitevente.png',link:'http://yannlederreytest.ch/',},
	  // { imgSrc:'http://placehold.it/300x300',link:'#', },
	];
});