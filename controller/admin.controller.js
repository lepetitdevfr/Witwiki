(function () {
    'use strict';

    angular
    .module('app')
    .controller('AdminController', HomeController);

    AdminController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.updateUser = function(user) {
            UserService.UpdateUSer(user);
        }

        vm.addUser = function(user) {
            UserService.AddUser(user);
        }

        function loadAllUsers() {
            UserService.GetAll()
            .then(function (users) {
                vm.allUsers = users;
            });
        }
    }

})();
