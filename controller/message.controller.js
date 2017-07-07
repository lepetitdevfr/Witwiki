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
                    loadOutMessage();
                    vm.new();
                });
            }
        }

        function loadDest() {
            UserService.GetAllUsers()
            .then(function (content) {
                vm.dests =content.data;
            });
        }

        vm.reply = function(message) {
            vm.title = message.title;
            vm.dest = message.fromId;
        }

        vm.new = function() {
            vm.title = "";
            vm.dest = "";
            vm.message = "";
        }

        vm.readMessage = function(id) {
            var idReq = {id:id};
            MessageService.ReadMessage(idReq)
            .then(function (response) {
                loadInMessage();
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
