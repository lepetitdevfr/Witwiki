(function () {
    'use strict';

    angular
    .module('app')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['ArticleService', '$rootScope', '$routeParams'];
    function ArticleController(ArticleService, $rootScope, $routeParams) {
        var vm = this;

        console.log($routeParams.id);

        initController();

        function initController() {
            loadArticle();
        }

        function loadArticle() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
                console.log(vm.article);
            });
        }

    }

})();