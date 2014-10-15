//Swami Shreeji
//addAthleteCtrl.js

angular.module('myApp')

	.controller('addAthleteCtrl', ['Questions', '$scope', function(Questions, $scope) {

		$scope.title = "Add Athlete";
		$scope.counter = $scope.counter || 0;

		$scope.questions = $scope.questions || Questions.getData();

		$scope.getTotal = function() {
			return $scope.questions.length;
		}

		$scope.incrementCounter = function() {
			if($scope.counter === $scope.getTotal() - 1) {
				$scope.counter = 0;
			}
			else {
				$scope.counter += 1;
			}
		};

		$scope.decrementCounter = function() {
			if($scope.counter === 0) {
				$scope.counter = $scope.getTotal() - 1;
			}
			else {
				$scope.counter -= 1;
			}
		}

		$scope.clearAnswer = function() {
			$scope.userAnswer = '';
		}

		$scope.nextQuestion = function() {
			$scope.incrementCounter();
			$scope.clearAnswer();
		}

		$scope.isCorrect = function(value) {
			return value === this.questions(this.counter).a ? true : false;
		}

		$scope.$watch("userAnswer", function(newValue) {
			if($scope.isCorrect( newValue) ) {
				$scope.nextQuestion();	
			}
		});




}]);