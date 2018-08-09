myApp.controller('AuthenticationCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {

	var ref = new Firebase('https://athletictrainingapp.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	$scope.login = function() {
		auth.$authWithPassword({
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function(user) {
			console.log("Logged In!");
			$location.path('/athletes');
		}).catch(function(error) {
			console.log("Error: " + error.message);
		});
	};



}]);