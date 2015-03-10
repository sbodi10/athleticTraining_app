//Swami Shreeji
//injuryCtrl

angular.module('myApp')

	.controller('injuryCtrl', ['$scope', 'InjuriesService', function($scope, InjuriesService) {
		$scope.title = "Injured Athletes";
		$scope.injuries = InjuriesService.getInjuries();

		$scope.updateInjury = function(injury) {
			var injury = this.injury;
			//Need to add something here to update injury object
			var person = $scope.injuries.$getRecord(injury);
			InjuriesService.updateInjury(injury);
			console.log("Person Updated and Saved");
			$scope.closeEditInjuryModal();
		};

		$scope.addInjury = function(inj) {
			$scope.injuries.$add({name: $scope.name, injury: $scope.injury, description: $scope.description, date: $scope.date});
		}

		//Loads Overlay with Data from Clicked Row
		$scope.rowClick = function(injury) {
			$scope.injury = injury;
			console.log(injury);
			$('#editInjury').foundation('reveal', 'open');
		}

		//NOT WORKING - Closes the overlay
		$scope.closeEditInjuryModal = function() {
			console.log("Closing Modal");
			$('#editInjury').foundation('reveal', 'close');
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