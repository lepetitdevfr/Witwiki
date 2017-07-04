(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAllUsers = GetAllUsers;
        service.GetAllRoles = GetAllRoles;
        service.CreateUser = CreateUser;
        service.UpdateRole = UpdateRole;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAllUsers() {
            return $http.get('http://localhost:8080/getAllUsers').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetAllRoles() {
            return $http.get('http://localhost:8080/getAllRoles').then(handleSuccess, handleError('Error getting all users'));
        }

        function UpdateRole() {
            return $http.post('http://localhost:8080/updateRole').then(handleSuccess, handleError('Error updating user role'))
        }

        function CreateUser(user) {
            return $http.post('http://localhost:8080/addUser',user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return { success: true, data:res.data}
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
