//Swami Shreeji
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);



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

//Injuries Service
myApp.factory('InjuriesFactory', ['$http', function($http) {
	var Injuries = {};
	$http.get('../jsons/athletes_injuries.json').success(function(data) {
		console.log(data);
		Injuries.data = data;
	});
	return Injuries;
}])


//Athletes Service
myApp.factory('AthletesFactory', ['$http', function($http) {
	var Athletes = {};
	$http.get('../jsons/athletes_information.json').success(function(data) {
		console.log(data);
		Athletes.data = data;
	});
	return Athletes;
}])


myApp.factory('Notes', function() {
	var data = [ {d: ' ' } ];
	return {
		getData: function() {
			return data;
		}
	}
});


myApp.factory('Reminders', function() {
	var data = [ { r: 'Learn AngularJS' } ];
	return {
		getData : function() {
			return data;
		}
	}
});


myApp.factory('Quiz', function() {
	var data = [ {q: 'Sapan Bodiwala', a: 'Dashboard'},
		{q: 'Arun', a: 'Checklist'} ];

	return {
		getData : function() {
			return data;
		}
	}
});
