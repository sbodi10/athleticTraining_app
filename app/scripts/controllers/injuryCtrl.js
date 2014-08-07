//Swami Shreeji
//injuryCtrl

angular.module('myApp')

	.controller('injuryCtrl', ['$scope', 'Injuries', function($scope, Injuries) {
		$scope.title = "Injured Athletes";
		$scope.injuries = Injuries;
	
}])