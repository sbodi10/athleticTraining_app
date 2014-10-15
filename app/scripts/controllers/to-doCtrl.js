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
			
			var bar = $("#bar");
			var progress = $(".progress");
			$(window).load(function() {
				progress.fadeIn(1000);
				bar.css("width", "0%");
				bar.css("width", "100%");
				bar.fadeOut(1000);
				progress.fadeOut(1000);
			});

			var resource = $("#resource");
			var task = $("#task");
			var formQuestion = $("#formQuestion");
			var formAnswer = $("#formAnswer");
			var addTask = $("#addTask");

			addTask.attr("disabled", true);

			resource.keyup(function() {
				if(resource.val().length >= 3 && task.val().length >= 3) {
					addTask.attr("disabled", false);
				}
				else {
					addTask.attr("disabled", true);
				}
			});

			task.keyup(function() {
				if(resource.val().length >= 3 && task.val().length >= 3) {
					addTask.attr("disabled", false);
				}
				else {
					addTask.attr("disabled", true);
				}
			});
			

		});

}]);