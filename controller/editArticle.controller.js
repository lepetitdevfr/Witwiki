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
            loadArticle();
        }

        vm.deleteArticle = function () {
            var params = {id:vm.article.id};
            ArticleService.DeleteArticle(params)
            .then(function (response) {
                if (response.success) {
                    $location.path('/');
                }
            });
        }

        function loadArticle() {
            var id = {id:$routeParams.id};
            ArticleService.GetArticleById(id)
            .then(function (content) {
                vm.article = content.data;
                vm.content = vm.article.content;
                vm.title = vm.article.title;
                vm.preface = vm.article.preface;
                vm.idCat = vm.article.catId;
                if ((($rootScope.globals.currentUser.id_role == 2 || $rootScope.globals.currentUser.id_role == 1)  && $rootScope.globals.currentUser.pseudo == vm.article.auteur) ||$rootScope.globals.currentUser.id_role == 1) {
                    loadAllCat();
                }else {
                    $location.path('/');
                }
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
