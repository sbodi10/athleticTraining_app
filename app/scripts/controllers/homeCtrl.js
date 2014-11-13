//Swami Shreeji
//homeCtrl

angular.module('myApp')

	.controller('homeCtrl', ['$rootScope', 'Notes', 'Reminders', '$scope', function($rootScope, Notes, Reminders, $scope) {

		$scope.title = "The Trainer's Center";

		//Notes
		$scope.notes = $scope.notes || Notes.getData();

		$scope.saveNotes = function(userNotes) {
			if(userNotes) {
				console.log("Saved Notes!");
				$scope.notes.push( {d: $scope.userNotes} );
			}
		}



		//Reminders
		$scope.counter = 0;
		$scope.reminder = $scope.reminder || Reminders.getData();

		$scope.addReminder = function(userInput) {
			if(userInput)
			{
				$scope.reminder.push( {r: $scope.userReminder} );
				$scope.counter += 1;
				$scope.userReminder = '';
			}
		}

		$scope.reminderCounter = function() {
			$scope.counter = $scope.reminder.length;
		}



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

	            var date = new Date();
        	     	console.log(date.getMonth());
	            console.log(date.getFullYear());

	            $scope.getDayName = function(dayNumber) {
	            	var weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	            	return weekday[date.getDay()];
	            }

	            $scope.getMonthName = function(monthNumber) {
	            	var month = ['Jan', 'Feb', ];
	            }

	            $('.day_date').text($scope.getDayName());

}]);