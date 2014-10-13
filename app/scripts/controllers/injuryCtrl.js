//Swami Shreeji
//injuryCtrl

angular.module('myApp')

	.controller('injuryCtrl', ['$scope', 'Injuries', function($scope, Injuries) {
		$scope.title = "Injured Athletes";
		$scope.injuries = Injuries;

		//Select Date
		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();

		//Clear the Date
		$scope.clear = function() {
			$scope.dt = null;
		};

		//
		$scope.toggleMin = function() {
			$scope.minDate = $scope.minDate ? null : new Date();	
		}
		$scope.toggleMin();

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = true;
		};

		$scope.dateOptions = {
			formatYear: 'yyyy',
			startingDay: 1
		};

		$scope.initDate = new Date('2016-15-20');
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];

	
}])