//Swami Shreeji
//athletesCtrl.js

angular.module('myApp')

	.controller('athletesCtrl', ['$scope', '$firebase', 'FIREBASE_URI', 'AthletesService', 'GRADE_OPTIONS', 'SELECT_OPTIONS',
		function($scope, $firebase, FIREBASE_URI, AthletesService, GRADE_OPTIONS, SELECT_OPTIONS) {

		$scope.title = "List of Athletes";

		$scope.alerts =
			{type: 'Saved', message: 'Athlete Saved Successfully!'};


		$scope.athletes = AthletesService;

		//Dropdown Selections & Dropdown Defaults
		$scope.gradeOptions = angular.copy(GRADE_OPTIONS);
		$scope.selectedGrade = $scope.gradeOptions[0];
		$scope.doctorOptions = angular.copy(SELECT_OPTIONS);
		$scope.visitedDoctor = $scope.doctorOptions[0];
		$scope.therapyOptions = angular.copy(SELECT_OPTIONS);
		$scope.therapy = $scope.therapyOptions[0];
		$scope.insuranceOptions = angular.copy(SELECT_OPTIONS);
		$scope.insuranceForm = $scope.insuranceOptions[0];
		$scope.reportOptions = angular.copy(SELECT_OPTIONS);
		$scope.reportFiled = $scope.reportOptions[0];

		//Save New Athlete
		$scope.saveNewAthlete = function() {

			var newAthlete = {
				 name : $scope.athleteName,
				 age : $scope.age,
				 grade : $scope.selectedGrade,
				 number : $scope.number,
				 doctor : $scope.doctor,
				 doctorNumber : $scope.doctorNumber,
				 visitedDoctor : $scope.visitedDoctor,
				 therapy : $scope.therapy,
				 insuranceForm : $scope.insuranceForm,
				 reportFiled : $scope.reportFiled
			};

			var athletesList = AthletesService;

			athletesList.$add(newAthlete);

			console.log("New Athlete Added!");
			$scope.athleteName = '';
			$scope.age = '';
			$scope.grade = '';
			$scope.number = '';
			$scope.doctor = '';
			$scope.doctorNumber = '';
			$scope.visitedDoctor = '';
			$scope.therapy = '';
			$scope.insuranceForm = '';
			$scope.reportFiled = '';

			$('#addAthlete').foundation('reveal', 'close');
		};

		//THIS NEEDS TO BE FIXED
		$scope.updateAthlete = function(person) {
			var athletesList = AthletesService;
			athletesList.$save(this.person);
			console.log(this.person.name + " has been updated!");
			$('#editAthlete').foundation('reveal', 'close');
		};

		$scope.deleteAthlete = function(person) {
			var athletesList = AthletesService;
			athletesList.$remove(this.person);
			$('#editAthlete').foundation('reveal', 'close');
		};

		//Loads Overlay with Data from Clicked Row
		$scope.rowClick = function(person) {
			$scope.person = this.person;
			console.log(person);
			$('#editAthlete').foundation('reveal', 'open');
		}

		$scope.cancelButton = function() {
			$scope.newAthlete = '';
			$scope.athleteName = '';
			$scope.age = '';
			$scope.grade = '';
			$scope.number = '';
			$scope.doctor = '';
			$scope.doctorNumber = '';
			$scope.visitedDoctor = '';
			$scope.therapy = '';
			$scope.insuranceForm = '';
			$scope.reportFiled = '';
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

	            $(document).foundation();
}])