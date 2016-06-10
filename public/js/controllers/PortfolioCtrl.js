angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope) {
	$scope.steps =
    [ { imgSrc:'../../img/noway-aimant.png' ,link:'http://yannlederrey.wix.com/no-way', },      
	  { imgSrc:'../../img/Logo_Championnats_Suisses-aimant.png',link:'http://echallens2016.ch/', },
	];
	$scope.steps2 =
    [
	 { imgSrc:'../../img/Chabloz-aimant.png',link:'http://roxannetest.tk/chabloz', },
	 { imgSrc:'../../img/sitevente-aimant.png',link:'http://yannlederreytest.ch/',},
	];
});