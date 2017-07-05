(function () {
    'use strict';

    angular
    .module('app')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['ArticleService', '$rootScope','CatService'];
    function HomeController(ArticleService, $rootScope, CatService) {
        var vm = this;

        function init() {
            loadAllArticles();
            loadAllCat();
        }

        function loadAllArticles() {
            ArticleService.GetAllArticles()
            .then(function (content) {
                vm.allArticles = content.data;
            });
        }

        function loadAllCat() {
            CatService.GetAllCat()
            .then(function (content) {
                vm.allCat = content.data;
            });
        }

        init();
    }

})();
