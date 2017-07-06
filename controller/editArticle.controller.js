(function () {
    'use strict';

    angular
    .module('app')
    .controller('EditArticleController', EditArticleController);

    EditArticleController.$inject = ['ArticleService', '$rootScope', 'textAngularManager', 'CatService', '$routeParams'];
    function EditArticleController(ArticleService, $rootScope, textAngularManager, CatService, $routeParams) {
        var vm = this;

        initController();

        function initController() {
            loadAllCat();
            loadArticle();
        }

        vm.addArticle = function () {
            var params = {title:vm.title,preface:vm.preface,content:vm.content,idCat:vm.idCat};
            ArticleService.UpdateArticle(params)
            .then(function (response) {
                console.log(response);
            });
        }

        function loadArticle() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
                console.log(vm.article);
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
