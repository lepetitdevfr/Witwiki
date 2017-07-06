(function () {
    'use strict';

    angular
    .module('app')
    .controller('MessageController', MessageController);

    MessageController.$inject = ['$rootScope','$location', 'UserService'];
    function MessageController($rootScope, $location, UserService) {
        var vm = this;

        initController();

        function initController() {
            loadDest();
        }

        vm.newMessage = function() {
            var message = {title:vm.title,content:vm.message,to:vm.dest,from:$rootScope.id};
            console.log(vm.dest);
            console.log(message);

        }

        function loadDest() {
            UserService.GetAllUsers()
            .then(function (content) {
                vm.dests =content.data;
                console.log(vm.dests);
            });
        }
    }

})();
