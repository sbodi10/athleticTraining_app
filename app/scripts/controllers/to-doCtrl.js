//Swami Shreeji
//to-doCtrl.js

angular.module('myApp')

	.controller('to-doCtrl', ['Quiz', '$scope', function(Quiz, $scope) {
		$scope.title = "To-Do List";

		$scope.quizzes = $scope.quizzes || Quiz.getData();
		$scope.addItem = function(question, answer) {
			
			//If resource and task are both filled.. then add task works
			if(question && answer) {
				$scope.quizzes.push( {q: $scope.formQuestion, a: $scope.formAnswer});
				$scope.formQuestion = '';
				$scope.formAnswer = '';
			}
		}
		$scope.removeLast = function() {
			$scope.quizzes.pop();
		}

		$scope.getTotal = function() {
			return $scope.quizzes.length;
		}

		$scope.clearList = function() {
			$scope.quizzes = [];
		}


		/*
		1. Enable button once both inputs have text entered
		2. Onblur function, highlight input box
		*/

		$(function() {
			

			/*
			if("#resource").blur(function() {
				var a = $("#resource").val();
			})

			if("#task").blur(function() {
				var b = $("#task").val();
			}


			/*$("#addTask").on("click", function() {
				if (a + b != '') {
					$("#addTask").attr("disabled", false);
				}
			});*/
				
		});

}]);