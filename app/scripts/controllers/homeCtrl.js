//Swami Shreeji
//homeCtrl

angular.module('myApp')

	.controller('homeCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

		//Progress Bar
	            $scope.loadBar = function() {
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
			//progress.fadeOut(2000);
	            }

	            //Sets Sports Filter
		$scope.sportsModel = 'All Sports';

		$scope.allSportsShow = function() {
			$scope.fallSports = true;
			$scope.winterSports = true;
			$scope.springSports = true;
			$('.space').slideDown(400);
			$scope.loadBar();
		}

		$scope.fallSportsShow = function() {
			$scope.fallSports = true;
			$scope.winterSports = false;
			$scope.springSports = false;
			$('.space').slideUp(400);
			$scope.loadBar();
		}

		$scope.winterSportsShow = function() {
			$scope.winterSports = true;
			$scope.fallSports = false;
			$scope.springSports = false;
			$('.space').slideUp(400);
			$scope.loadBar();

		}

		$scope.springSportsShow = function() {
			$scope.springSports = true;
			$scope.fallSports = false;
			$scope.winterSports = false;
			$('.space').slideUp(400);
			$scope.loadBar();
		}

		//This is a bad way of doing this
		if($scope.sportsModel == 'All Sports') {
			$scope.allSportsShow();
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

/*
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

*/


}]);