(function () {
    'use strict';
    angular.module('app').controller('AdminController', AdminController);
    AdminController.$inject = ['UserService', '$rootScope'];
    function AdminController(UserService, $rootScope) {
        var vm = this;

        init();

        vm.updateUser = function(user) {
            console.log(user);
            UserService.UpdateUSer(user);
        }

        function init() {
            loadAllUsers();
            loadAllRoles();
        }

        vm.addUser = function(user) {
            UserService.AddUser(user);
        }

        function loadAllUsers() {
            UserService.GetAllUsers()
            .then(function (users) {
                vm.allUsers = users;
            });
        }

        function loadAllRoles() {
            UserService.GetAllRoles()
            .then(function (roles) {
                vm.allRoles = roles;
            });
        }
    }

})();
