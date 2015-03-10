//Swami Shreeji
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'firebase']);

myApp.constant('FIREBASE_URI', 'https://athletictrainingapp.firebaseio.com/');

myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: '../templates/home.html',
		controller: 'homeCtrl'
		//USING A SERVICE
/*		resolve: {
			friends: ['$http', function($http) {
				return $http.get('/api/friends.json').then(function(response) {
					return response.data;
				})
			}]
		}*/
	})

	$stateProvider.state('athletes', {
		url: '/athletes',
		templateUrl: '../templates/athletes.html',
		controller: 'athletesCtrl',
	})

	$stateProvider.state('injury', {
		url: '/injuries',
		templateUrl: '../templates/injuries.html',
		controller: 'injuryCtrl'
	})

	$stateProvider.state('to-do', {
		url: '/to-do',
		templateUrl: '../templates/to-do.html',
		controller: 'to-doCtrl'
	})

	$stateProvider.state('about', {
		url: '/about',
		templateUrl: '../templates/about.html',
		controller: 'aboutCtrl'
	})
}]);


//Services -------------------------------------------------

//Injuries Service using $http
/*myApp.factory('InjuriesFactory', ['$http', function($http) {
	var Injuries = {};
	$http.get('../jsons/athletes_injuries.json').success(function(data) {
		console.log(data);
		Injuries.data = data;
	});
	return Injuries;
}])*/


//Athletes Service using $http
/*myApp.factory('AthletesFactory', ['$http', function($http) {
	var Athletes = {};
	$http.get('../jsons/athletes_information.json').success(function(data) {
		console.log(data);
		Athletes.data = data;
	});
	return Athletes;
}])*/


//Athletes Service Using Firebase
myApp.factory('AthletesService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
	var ref = new Firebase('https://athletictrainingapp.firebaseio.com/athletes');
	var athletes = $firebase(ref).$asObject();

	var Athletes = {
		getAthletes : function() {
			return athletes;
		},

		editAthlete : function(person) {
			person.$save(person);
		}
	}

	return Athletes;
}])

//Injuries Service Using Firebase
myApp.factory('InjuriesService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
	var ref = new Firebase('https://athletictrainingapp.firebaseio.com/injuries');
	var injuries = $firebase(ref).$asObject();

	var Injuries = {
		getInjuries : function() {
			return injuries;
		},

		updateInjury : function(person) {
			injuries.$save(person).then(function() {
				console.log(person + " has been saved");
			});
		}
	}

	return Injuries;
}])


myApp.factory('todoService', ['$http', function($http) {

	var url = 'https://athletictrainingapp.firebaseio.com/todo.json';
	var tasks = {};

	tasks.getTasks = function() {
		return $http.get(url);
	};

	tasks.addTask = function(newtask) {
		return $http.post(url, newtask);
	};

	return tasks;
}]);

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
//Swami Shreeji
//landingCtrl

angular.module('myApp')

	.controller('landingCtrl', ['$scope', function($scope) {



	}]);
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