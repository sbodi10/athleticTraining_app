//Swami Shreeji
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
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
		templateUrl: 'templates/athletes.html',
		controller: 'athletesCtrl'
	})


	$stateProvider.state('injury', {
		url: '/injuries',
		templateUrl: 'templates/injuries.html',
		controller: 'injuryCtrl'
	})

	$stateProvider.state('to-do', {
		url: '/to-do',
		templateUrl: 'templates/to-do.html',
		controller: 'to-doCtrl'
	})

	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'aboutCtrl'
	})
}]);


//Services -------------------------------------------------

//Injuries Service
myApp.factory('Injuries', function() {
	var Injuries = {};
	Injuries.athletes = [
		{
			name: 'Richard Cevallos',
			injury: 'Broken Ankle',
			description: 'Fell while running up the stairs',
			date: '08/05/14'
		},
		{
			name: 'Sapan Bodiwala',
			injury: 'Tennis Elbow',
			description: 'Swinging the wrong way',
			date: '05/14/10'
		},
		{
			name: 'Kristin Mathews',
			injury: 'Broken Arm',
			description: 'Collision in center field',
			date: '08/05/14'
		},
		{
			name: 'Ryan Belisle',
			injury: 'Broken Ankle',
			description: 'Tripped on shoe laces',
			date: '08/05/14'
		},
		{
			name: 'Eric Torres',
			injury: 'Concussion',
			description: 'Fell on his head',
			date: '08/05/14'
		}
	];
	return Injuries;
})


//Athletes Service
myApp.factory('Athletes', function() {
	var Athletes = {};
	Athletes.players = [
		{
			name: 'Richard Cevallos',
			age: '22',
			grade: '12',
			doctor: 'Dr. Shah',
			phone: '(555) 555-5555',
			gotoDoctor: 'No',
			therapy: 'No',
			insurance: 'Yes',
			report: 'Yes'
		},
		{
			name: 'Sapan Bodiwala',
			age: '22',
			grade: '12',
			doctor: 'Dr. Patel',
			phone: '(555) 555-5555',
			gotoDoctor: 'Yes',
			therapy: 'Yes',
			insurance: 'Yes',
			report: 'Yes'
		},
		{
			name: 'Kristin Mathews',
			age: '22',
			grade: '12',
			doctor: 'Dr. Soap',
			phone: '(222) 222-2222',
			gotoDoctor: 'No',
			therapy: 'Yes',
			insurance: 'Yes',
			report: 'No'
		},
		{
			name: 'Ryan Belise',
			age: '22',
			grade: '12',
			doctor: 'No',
			phone: '(555) 555-5555',
			gotoDoctor: 'No',
			therapy: 'No',
			insurance: 'No',
			report: 'No'
		},
		{
			name: 'Eric Torres',
			age: '22',
			grade: '12',
			doctor: 'Yes',
			phone: '(455) 555-5555',
			gotoDoctor: 'No',
			therapy: 'Yes',
			insurance: 'No',
			report: 'No'
		}
	];
	
	return Athletes;
})














