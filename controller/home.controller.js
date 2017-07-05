(function () {
    'use strict';

    angular
    .module('app')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['ArticleService', '$rootScope'];
    function HomeController(ArticleService, $rootScope) {
        var vm = this;

        function init() {
            loadAllArticles();
        }

        function loadAllArticles() {
            ArticleService.GetAllArticles()
            .then(function (content) {
                vm.allArticles = content.data;
            });
        }

        init();
    }

})();
