angular.module("app").controller("mainController", function ($scope, usersFactory)
{
	$scope.users = usersFactory.getUsers();

	$scope.createUser = function(user)
	{
		if ($scope.newUser.password1 === $scope.newUser.password2) {		
			usersFactory.createUser(user);
			$scope.newUser.pseudo='';
			$scope.newUser.nom='';
			$scope.newUser.prenom='';
			$scope.newUser.email='';
			$scope.newUser.password1='';
			$scope.newUser.password2='';
		}
	}
});