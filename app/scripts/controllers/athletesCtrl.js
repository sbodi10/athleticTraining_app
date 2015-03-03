//Swami Shreeji
//athletesCtrl.js

angular.module('myApp')

	.controller('athletesCtrl', ['$scope', '$firebase', 'AthletesService', function($scope, $firebase, AthletesService) {
		$scope.title = "List of Athletes";
		$scope.athletes = AthletesService.getAthletes();

		/*$scope.addAthlete = function() {
			AthletesService.addAthlete(person);
		};

		$scope.editAthlete = function(id) {
			AthletesService.editAthlete(person);
		};

		$scope.deleteAthlete = function(id) {
			AthletesService.deleteAthlete(person)
		};
		*/

		//$scope.addNewAthlete = saveNewAthlete();

		/*$scope.saveNewAthlete = function() {

			var NewAthlete = Parse.Object.extend("Popat");
			var newAthlete = new Popat();

			var athleteName = $('#athleteName').val();
			var athleteAge = $('#age').val();
			var athleteGrade = $('#grade').val();
			var athletePhoneNumber = ('#number').val();
			var athleteDoctor = $('#doctor').val();
			var athleteDoctorNumber = $('#doctorNumber').val();
			var athleteVistedDoctor = $('#visitedDoctor').val();
			var athleteTherapy = $('#therapy').val();
			var athleteForm = $('#insuranceForm').val();
			var athleteReport = $('#reportFiled').val();

			newAthlete.set("athleteName", athleteName);
			newAthlete.set("athleteAge", athleteAge);
			newAthlete.set("athleteGrade", athleteGrade);
			newAthlete.set("athletePhoneNumber", athletePhoneNumber);
			newAthlete.set("athleteDoctor", athleteDoctor);
			newAthlete.set("athleteDoctorNumber", athleteDoctorNumber);
			newAthlete.set("athleteVistedDoctor", athleteVistedDoctor);
			newAthlete.set("athleteTherapy", athleteTherapy);
			newAthlete.set("athleteForm", athleteForm);
			newAthlete.set("athleteReport", athleteReport);

			newAthlete.save(null, {
				success: function() {
					console.log("Saved Athlete");
					console.log(newAthlete);
					closeAddAthleteModal();
				},
				error: function(athlete, error) {
					console.log("Error -> Did not save Athlete");
					console.log(error.message);
				}
			})
		}*/

		$scope.closeAddAthleteModal = function() {
			$('#addAthlete').foundation('reveal', 'close');
		}

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