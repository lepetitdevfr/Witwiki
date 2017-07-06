(function () {
    'use strict';

    angular
    .module('app')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['ArticleService', '$rootScope','CatService'];
    function HomeController(ArticleService, $rootScope, CatService) {
        var vm = this;
        var numberArticle = 23;

        vm.changeReq = function(pagination) {
            console.log(vm.cat);
            console.log(vm.tri);
            
            if (pagination != undefined) {
                vm.pagination = pagination;
            }
            console.log(vm.pagination);
        }

        function init() {
            loadAllArticles();
            loadAllCat();
            pagination();

            vm.tri = "date";
            vm.cat = "all";

            var paginationObject = {};
            paginationObject.page = 1;
            paginationObject.sqlInfo = 10;

            vm.pagination = paginationObject;
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

        function pagination() {
            var nbrPage = Math.ceil(numberArticle / 10);
            vm.paginationArray = [];

            for (var i = 0; i < nbrPage; i++) {
                var paginationObject = {};
                var page = i+1;
                paginationObject.page = page;
                paginationObject.sqlInfo = page*10;
                vm.paginationArray.push(paginationObject);
            }
        }

        init();
    }

})();
