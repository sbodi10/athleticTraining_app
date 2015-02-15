//Swami Shreeji
//injuryCtrl

angular.module('myApp')

	.controller('injuryCtrl', ['$scope', 'Injuries', function($scope, Injuries) {
		$scope.title = "Injured Athletes";
		$scope.injuries = Injuries;

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


}])