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
                console.log(vm);
                var message = {title:vm.title,content:vm.message,to:vm.dest.id,from:$rootScope.globals.currentUser.id};
                MessageService.AddMessage(message)
                .then(function (content) {
                    loadOutMessage();
                    console.log();
                    mailNotification(vm.dest.email)
                    vm.new();
                });
            }
        }

        function loadDest() {
            UserService.GetAllUsers()
            .then(function (content) {
                vm.dests =content.data;
                console.log(content.data)
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

        function mailNotification(email){
          var message = "Vous avez reçu un nouveau message de la part de "+ $rootScope.globals.currentUser.pseudo;
          var data = {
            from: '"Witwiki Notification 👻" <jerem71100@gmail.com>',
            to: email,
            subject: "Witwiki - Nouveau Message",
            text: message,
            html: '<b>'+message+'</b>'
        };
        UserService.SendMail(data)
        .then(function (content) {
            
        });
    }
}

})();
