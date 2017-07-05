(function () {
    'use strict';

    angular
    .module('app')
    .controller('addArticleController', addArticleController);

    addArticleController.$inject = ['ArticleService', '$rootScope', 'textAngularManager', 'CatService'];
    function addArticleController(ArticleService, $rootScope, textAngularManager, CatService) {
        var vm = this;

        initController();

        function initController() {
            console.log()
            loadAllCat();
        }

        vm.addArticle = function (title,preface,content) {
            var params = {title:title,preface:preface,content:content};
            ArticleService.CreateArticle(params)
            .then(function (response) {
                console.log(response);
            });
        }

        function loadAllCat() {
            CatService.GetAllCat()
            .then(function (content) {
                vm.allCat = content.data;
            });
        }

    }

})();