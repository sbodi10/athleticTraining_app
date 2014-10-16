//Swami Shreeji
//aboutCtrl

angular.module('myApp')
	
	.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.title = "Inside the Athletic Training App";

		var inform = "This application was developed for Trainer Danielle LaBianca. After being the athletic trainer my local high school, the Elmwood Park Crusaders for the past 10 years, I wanted to give back to the hard work that she has put in for the athletes in our community. While I've recently graduated college and just started my career, I still wanted to learn more. And so I decided to take the opportunity to learn more with a better cause to help serve my local community. And after a few months of development, this application was released for her and all athletic trainers out there looking for a user friendly application to serve their needs. I hope you enjoy using the app as much as I enjoyed developing it.";

		$scope.inform = inform;

		$scope.onViewLoad = function() { 
                		var bar = $("#bar");
                		var progress = $(".progress");                      
			progress.fadeIn(50);
			bar.fadeIn(100);
			bar.css("width", "0%");
			bar.css("width", "25%");
			bar.css("width", "50%");
			bar.css("width", "75%");
			bar.css("width", "100%");
			bar.fadeOut(2000);
			progress.fadeOut(2000);
	            }
}]);