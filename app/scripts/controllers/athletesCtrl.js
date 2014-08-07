//Swami Shreeji
//athletesCtrl.js

angular.module('myApp')

	.controller('athletesCtrl', ['$scope', 'Athletes', function($scope, Athletes) {
		$scope.title = "List of Athletes";
		$scope.athletes = Athletes;

}])