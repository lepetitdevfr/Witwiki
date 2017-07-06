(function () {
    'use strict';

    angular
    .module('app')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['ArticleService', '$rootScope', '$routeParams'];
    function ArticleController(ArticleService, $rootScope, $routeParams) {
        var vm = this;

        console.log($routeParams.id);

        // initController();

        function initController() {
            loadArticle();
        }

        function loadArticle() {
            ArticleService.GatArticle($routeParams.id)
            .then(function (content) {
                vm.article = content.data;
            });
        }

    }

})();
