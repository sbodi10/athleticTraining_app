//Swami Shreeji
//aboutCtrl

angular.module('myApp')

	.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.title = "Inside the Athletic Training App";

		var inform = "This application was developed for Trainer Danielle LaBianca. After being the athletic trainer for the Elmwood Park Crusaders (my local highschool) for the past 10 years, I wanted to give back to her after all of the hard work she's put in for the athletes in our community. While I've recently graduated college and just started my career, I still wanted to proactively learn and do more. And so I decided to take the opportunity to help serve my local community. And after a few months of development, this application was released for her and all athletic trainers out there looking for a user friendly way to serve their needs. I hope you enjoy using the app as much as I enjoyed developing it.";

		$scope.inform = inform;


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