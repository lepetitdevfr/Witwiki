(function () {
    'use strict';

    angular
    .module('app')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['ArticleService', '$rootScope', '$routeParams', 'UserService'];
    function ArticleController(ArticleService, $rootScope, $routeParams, UserService) {
        var vm = this;
        var parser = new DOMParser;

        initController();

        function initController() {
            loadArticle();
            loadComment();
        }

        function loadArticle() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
                var dom = parser.parseFromString('<!doctype html><body>' + vm.article.content,'text/html');
                vm.article.content = dom.body.textContent;
            });
        }

        vm.sendComment = function() {
            if (vm.comment != undefined) {
                var comment = {content:vm.comment,idArticle:vm.article.id,idUser:$rootScope.globals.currentUser.id};
                ArticleService.AddCom(comment)
                .then(function (response) {
                    mailNotification();
                    vm.comment = undefined;
                    loadComment();
                });
            }
        }

        function loadComment() {
            var id = {idArticle:$routeParams.id};
            ArticleService.GetCom(id)
            .then(function (content) {
                vm.comments = content.data;
            });
        }


        function mailNotification(){
            var message = "Nouveau commentaire de "+$rootScope.globals.currentUser.pseudo+" sur "+vm.article.title;
            var data = {
                from: '"Witwiki Notification 👻" <jerem71100@gmail.com>',
                to: vm.article.emailAuteur,
                subject: "Witwiki - Nouveau commentaire",
                text: message,
                html: '<b>'+message+'</b>'
            };
            UserService.SendMail(data)
            .then(function (content) {

            });
        }
    }

})();
