//Swami Shreeji
//addAthleteCtrl.js

angular.module('myApp')

	.controller('addAthleteCtrl', ['Questions', '$timeout', '$scope', function(Questions, $timeout, $scope) {

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

			$scope.myClass = 'flip-add';
		}

		$scope.decrementCounter = function() {
			if($scope.counter === 0) {
				$scope.counter = $scope.getTotal() - 1;
			}
			else {
				$scope.counter -= 1;
			}

			$scope.myClass = 'flip-add';
		}

		$scope.clearAnswer = function() {
			$scope.userAnswer = '';
		}

		$scope.nextQuestion = function() {
			$scope.incrementCounter();
			$setTimeout(function() {
				$scope.myClass = '';
			}, 2500);
			$scope.clearAnswer();
		}

		$scope.prevQuestion = function() {
			$scope.decrementCounter();
			$setTimeout(function() {
				$scope.myClass = '';
			}, 2500);
			$scope.clearAnswer();
		}

                	$scope.onViewLoad = function() { 
                		var bar = $("#bar");
                		var progress = $(".progress");                      
			progress.fadeIn(50);
			bar.fadeIn(100);
			bar.css("width", "0%");
			bar.css("width", "25%");
			bar.css("width", "50%");
			bar.css("width", "75%");
			bar.css("width", "100%");
			bar.fadeOut(2000);
			progress.fadeOut(2000);
	            }

}]);