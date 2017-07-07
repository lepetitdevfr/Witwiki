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
        service.SendMail = SendMail;

        return service;
        // param.pseudo, param.lastname, param.firstname, param.email, param.password
        function CreateUser(param) {
            return $http.post('http://localhost:8080/addUser',param).then(handleSuccess, handleError('Error creating user'));
        }

        function GetAllUsers() {
            return $http.get('http://localhost:8080/getAllUsers').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetAllRoles() {
            return $http.get('http://localhost:8080/getAllRoles').then(handleSuccess, handleError('Error getting all users'));
        }
        // param.role, param.pseudo
        function UpdateRole(param) {
            return $http.post('http://localhost:8080/updateRole',param).then(handleSuccess, handleError('Error updating user role'))
        }
        // param.role, param.pseudo
        function SendMail(param) {
            return $http.post('http://localhost:8080/sendMail',param).then(handleSuccess, handleError('Error updating user role'))
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
