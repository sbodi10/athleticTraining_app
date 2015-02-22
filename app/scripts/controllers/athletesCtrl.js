//Swami Shreeji
//athletesCtrl.js

angular.module('myApp')

	.controller('athletesCtrl', ['$scope', 'AthletesFactory', function($scope, AthletesFactory) {
		$scope.title = "List of Athletes";
		$scope.athletes = AthletesFactory;


		//Loads Overlay with Data from Clicked Row
		$scope.rowClick = function(person) {
			$scope.person = person;
			console.log(person);
			$('#editAthlete').foundation('reveal', 'open');
		}

		//NOT WORKING - Closes the overlay
		$scope.closeEditAthleteModal = function() {
			$('#editAthlete').foundation('reveal', 'close');
		}

		$scope.cancelButton = function() {
			$('#athleteName').val('');
			$scope.newAthlete = '';
			$('#age').val('');
			$('[name=grade]').val('');
			$('#number').val('');
			$('#doctor').val('');
			$('#doctorNumber').val('');
			$('[name=visitedDoctor]').val('');
			$('[name=therapy]').val('');
			$('[name=insuranceForm]').val('');
			$('[name=reportFiled]').val('');
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

/*
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
*/
}])