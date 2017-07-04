(function () {
    'use strict';
    angular.module('app').controller('AdminController', AdminController);
    AdminController.$inject = ['UserService', '$rootScope'];
    function AdminController(UserService, $rootScope) {
        var vm = this;
        init();

        vm.updateRoleUser = function(user) {
            var newRoleUSer = '{pseudo:"' + user.pseudo + '", role:' + user.id_role + '}';
            UserService.UpdateRole(newRoleUSer);
        }

        function init() {
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
