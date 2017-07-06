(function () {
    'use strict';

    angular
    .module('app')
    .controller('EditArticleController', EditArticleController);

    EditArticleController.$inject = ['ArticleService', '$rootScope', 'textAngularManager', 'CatService', '$routeParams','$location'];
    function EditArticleController(ArticleService, $rootScope, textAngularManager, CatService, $routeParams,$location) {
        var vm = this;

        initController();

        function initController() {
            loadAllCat();
            loadArticle();
        }

        vm.editArticle = function () {
            var params = {title:vm.title,preface:vm.preface,content:vm.content,idCat:vm.idCat,id:$routeParams.id};
            ArticleService.UpdateArticle(params)
            .then(function (response) {
                console.log(response);
                if (response.success) {
                    $location.path('/article/'+$routeParams.id);
                }
            });
        }

        function loadArticle() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
                console.log(vm.article);
                vm.content = vm.article.content;
                vm.title = vm.article.title;
                vm.preface = vm.article.preface;
                vm.idCat = vm.article.catId;
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
