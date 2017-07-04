(function () {
    'use strict';
    angular.module('app').controller('AdminController', AdminController);
    AdminController.$inject = ['UserService', '$rootScope'];
    function AdminController(UserService, $rootScope) {
        var vm = this;
        init();

        vm.updateUser = function(user) {
            UserService.UpdateUSer(user);
        }

        function init() {
            console.log($rootScope.globals.currentUser);
            loadAllUsers();
            loadAllRoles();
        }

        function loadAllUsers() {
            UserService.GetAllUsers()
            .then(function (content) {
                vm.allUsers = content.data;
            });
        }

        function loadAllRoles() {
            UserService.GetAllRoles()
            .then(function (content) {
                vm.allRoles = content.data;
            });
        }
    }

})();
