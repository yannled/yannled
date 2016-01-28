angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope) {
	$scope.steps =
    [ { imgSrc:'../../img/noway.png' ,link:'http://yannlederrey.wix.com/no-way', },
      { imgSrc:'../../img/sitevente.png',link:'http://yannlederreytest.ch/',},
	  { imgSrc:'../../img/Logo_Championnats_Suisses.jpg',link:'http://echallens2016.ch/', },
	];
});