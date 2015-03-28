//Swami Shreeji
//to-doCtrl.js

angular.module('myApp')

	.controller('to-doCtrl', ['$scope', '$firebase', 'FIREBASE_URI', 'todoService', function($scope, $firebase, FIREBASE_URI, todoService) {
		$scope.title = "To-Do List";
		$scope.pageClass = "page-todo";
		$scope.todo = todoService;

		//Adds Task to Todo List
		$scope.addTask = function() {
			var newTask = {
				user : $scope.user,
				task : $scope.task,
				done : 'NO'
			};

			var tasks = todoService;

			tasks.$add(newTask);

			console.log("New Task Added!");
			$scope.user = '';
			$scope.task = '';
		};

		//Deletes Selected To Do Tasks
		$scope.deleteTasks = function() {
			//Array of Tasks Needed To Be Deleted
			$scope.todo.forEach(function(item) {
				if(item.done === 'true') {
					$scope.todo.$remove(item);
				}
			})
			console.log("To Do Items Deleted");
		};

		//Deletes All To Do Tasks
		$scope.deleteAllTasks = function() {

			var deleteAllTaskArray = [];

			angular.forEach($scope.todo, function(todoItem) {
				deleteAllTaskArray.push(todoItem);
				console.log(deleteAllTaskArray);
			});

			todoService.deleteTask(deleteAllTaskArray)

				.success(function(response) {
					console.log("Task Deleted!");
					getTasks();
				})

				.error(function(error) {
					$scope.status = "Task Could Not Be Deleted: " + error;
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
	            };

}]);