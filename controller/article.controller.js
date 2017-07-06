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
            // loadComment();
        }

        function loadArticle() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
            });
        }

        vm.sendComment = function() {
            console.log(vm.comment);
        }

        function loadComment() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
            });
        }

    }

})();
