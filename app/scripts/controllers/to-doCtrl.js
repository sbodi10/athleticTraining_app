//Swami Shreeji
//to-doCtrl.js

angular.module('myApp')

	.controller('to-doCtrl', ['$scope', 'todoService', function($scope, todoService) {
		$scope.title = "To-Do List";

		//Binds the todoService with the todo variable within the scope for the view to access
		function getTasks () {
			todoService.getTasks()

			.success(function(response) {
				$scope.todo = response;
			})

			.error(function(error) {
				$scope.status = "Unable to load ToDo Tasks " + error.message;
			});
		}

		//Call getTasks to grab data
		getTasks();

		//Adds Task to Todo List
		$scope.addTask = function() {

			var newTask = {
				user : $scope.user,
				task : $scope.task
			};

			todoService.addTask(newTask)

				.success(function(response) {
					console.log("New Task Added!");
					$scope.user = '';
					$scope.task = '';
					getTasks();
				})

				.error(function(error) {
					$scope.noTask = "Task Could Not Be Added: " + error;
				});
		};





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