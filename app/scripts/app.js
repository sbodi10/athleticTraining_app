//Swami Shreeji
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'firebase']);

myApp.constant('FIREBASE_URI', 'https://athletictrainingapp.firebaseio.com/');

myApp.constant('GRADE_OPTIONS', [
	{
		value: 'Select'
	},
	{
		value: '9'
	},
	{
		value: '10'
	},
	{
		value: '11'
	},
	{
		value: '12'
	}
]);

myApp.constant('SELECT_OPTIONS', [
	{
		value: 'Select'
	},
	{
		value: 'Yes'
	},
	{
		value: 'No'
	}
]);

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
	return $firebase(ref).$asArray();
}]);

/*	var Athletes = {

		getAthletes : function() {
			return athletes;
		},

		editAthlete : function(person) {
			person.$save(person);
		},

		saveAthlete : function(person) {
			athletes.$add(person);
		}
	};

	return Athletes;*/

//Injuries Service Using Firebase
myApp.factory('InjuriesService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
	var ref = new Firebase('https://athletictrainingapp.firebaseio.com/injuries');
	return $firebase(ref).$asArray();
}]);


/*myApp.factory('todoService', ['$http', function($http) {

	var url = 'https://athletictrainingapp.firebaseio.com/todo.json';
	var tasks = {};

	tasks.getTasks = function() {
		return $http.get(url);
	};

	tasks.addTask = function(newtask) {
		return $http.post(url, newtask);
	};

	tasks.deleteTask = function(taskID) {
		return $http.delete(url, taskID);
	};

	return tasks;
}]);*/

myApp.factory('todoService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
	var ref = new Firebase('https://athletictrainingapp.firebaseio.com/todo');
	return $firebase(ref).$asArray();
}]);