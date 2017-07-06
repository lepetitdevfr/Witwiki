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
            loadInMessage();
            loadOutMessage();
        }

        vm.newMessage = function() {
            if (vm.title != undefined && vm.message != undefined && vm.dest != undefined && vm.title != "" && vm.message != "" && vm.dest != "") {
                var message = {title:vm.title,content:vm.message,to:vm.dest,from:$rootScope.globals.currentUser.id};
                MessageService.AddMessage(message)
                .then(function (content) {
                    $location.path('/');
                });
            }
        }

        function loadDest() {
            UserService.GetAllUsers()
            .then(function (content) {
                vm.dests =content.data;
            });
        }

        vm.readMessage = function(id) {
            var idReq = {id:id};
            console.log(idReq);
            MessageService.ReadMessage(idReq)
            .then(function (response) {
                console.log("fsd");
            });
        }

        function loadInMessage() {
            var idUser = {idUser:$rootScope.globals.currentUser.id};
            MessageService.GetMessageIn(idUser)
            .then(function (content) {
                vm.messagesIn = content.data;
            });
        }

        function loadOutMessage() {
            var idUser = {idUser:$rootScope.globals.currentUser.id};
            MessageService.GetMessageOut(idUser)
            .then(function (content) {
                vm.messagesOut = content.data;
            });
        }
    }

})();
