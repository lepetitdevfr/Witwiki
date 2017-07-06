(function () {
    'use strict';

    angular
    .module('app')
    .controller('AddArticleController', AddArticleController);

    AddArticleController.$inject = ['ArticleService', '$rootScope', 'textAngularManager', 'CatService', '$location'];
    function AddArticleController(ArticleService, $rootScope, textAngularManager, CatService, $location) {
        var vm = this;

        initController();

        function initController() {
            console.log()
            loadAllCat();
        }

        vm.addArticle = function (title,preface,content,idCat) {
            var params = {title:title,preface:preface,content:content,idCat:idCat,idAuteur:$rootScope.globals.currentUser.id};
            ArticleService.CreateArticle(params)
            .then(function (response) {
                console.log(response);
                if (response.success) {
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
