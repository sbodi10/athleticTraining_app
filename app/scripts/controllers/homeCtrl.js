//Swami Shreeji
//homeCtrl

angular.module('myApp')

	.controller('homeCtrl', ['$scope', function($scope) {
		$scope.title = "The Trainers Center";
		
		//Select Gender
		$scope.gender = ['Male', 'Female'];
		$scope.selectedValue = 'Select Gender';

		//Using Service
		//$scope.friends = friends;
}]);