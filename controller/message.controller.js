(function () {
    'use strict';

    angular
    .module('app')
    .controller('MessageController', MessageController);

    MessageController.$inject = ['$rootScope','$location', 'UserService', 'MessageService'];
    function MessageController($rootScope, $location, UserService, MessageService) {
        var vm = this;

        initController();

        function initController() {
            loadDest();
        }

        vm.newMessage = function() {
            var message = {title:vm.title,content:vm.message,to:vm.dest,from:$rootScope.globals.currentUser.id};
            console.log(message);
            MessageService.AddMessage(message)
            .then(function (content) {
            });

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
