//Swami Shreeji
//athletesCtrl.js

angular.module('myApp')

	.controller('athletesCtrl', ['$scope', 'Athletes', function($scope, Athletes) {
		$scope.title = "List of Athletes";
		$scope.athletes = Athletes;

	$(function() {		
		var bar = $("#bar");
		var progress = $(".progress");
		$(window).load(function() {
			progress.fadeIn(1000);
			bar.css("width", "0%");
			bar.css("width", "100%");
			bar.fadeOut(1000);
			progress.fadeOut(1000);
		});
	});

}])