angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope) {
	$scope.steps =
    [ { imgSrc:'../../img/noway.png' ,link:'http://yannlederrey.wix.com/no-way', },      
	  { imgSrc:'../../img/Logo_Championnats_Suisses.jpg',link:'http://echallens2016.ch/', },
	];
	$scope.steps2 =
    [
	 { imgSrc:'../../img/Chabloz.PNG',link:'http://roxannetest.tk/chabloz', },
	 { imgSrc:'../../img/sitevente.png',link:'http://yannlederreytest.ch/',},
	];
});