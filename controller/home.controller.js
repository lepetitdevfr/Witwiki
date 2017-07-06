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
            if (pagination != undefined) {
                vm.pagination = pagination;
            }

            var paramReq = {cat:vm.cat,tri:vm.tri,page:vm.pagination.sqlInfo};
            loadArticles(paramReq);
            console.log(paramReq);
        }

        function init() {
            loadAllCat();
            pagination();

            vm.tri = "date";
            vm.cat = "";

            var paginationObject = {};
            paginationObject.page = 1;
            paginationObject.sqlInfo = 0;

            vm.pagination = paginationObject;
            loadArticles({cat:vm.cat,tri:vm.tri,page:vm.pagination.sqlInfo});
        }

        function loadArticles(param) {
            ArticleService.GetArticles(param)
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
                paginationObject.sqlInfo = i*10;
                vm.paginationArray.push(paginationObject);
            }
        }

        init();
    }

})();
