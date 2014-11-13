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

		//Progress Bar
		$scope.onViewLoad = function() {
                		var bar = $("#bar");
                		var progress = $(".progress");
			progress.fadeIn(0);
			bar.fadeIn(100);
			bar.css("width", "0%");
			bar.css("width", "25%");
			bar.css("width", "50%");
			bar.css("width", "75%");
			bar.css("width", "100%");
			bar.fadeOut(2000);
			progress.fadeOut(2000);
	            }

		//Calendar
		var date = new Date();

		$scope.getDayName = function(dayNumber) {
		var weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
		return weekday[date.getDay()];
		}

		$scope.getMonthName = function(monthNumber) {
		var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		return month[date.getMonth()];
		}

		$('.day_date').text($scope.getDayName());
		$('.date_number').text(date.getDate());
		$('.month_date').text($scope.getMonthName() + ' ' + date.getFullYear());


}]);