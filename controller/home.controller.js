(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            vm.user = $rootScope.globals.currentUser;
        }

        function loadAllUsers() {
            UserService.GetAllUsers()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }
    }

})();