(function () {
    'use strict';

    angular
    .module('app')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['ArticleService', '$rootScope', '$routeParams'];
    function ArticleController(ArticleService, $rootScope, $routeParams) {
        var vm = this;

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
            });
        }

        vm.sendComment = function() {
            if (vm.comment != undefined) {
                var comment = {content:vm.comment,idArticle:vm.article.id,idUser:$rootScope.globals.currentUser.id};
                ArticleService.AddCom(comment)
                .then(function (response) {
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

    }

})();
