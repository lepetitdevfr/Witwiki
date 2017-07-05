(function () {
    'use strict';

    angular
        .module('app')
        .controller('addArticleController', addArticleController);

    addArticleController.$inject = ['ArticleService', '$rootScope'];
    function addArticleController(ArticleService, $rootScope) {
        var vm = this;

        initController();

        function initController() {
            
        }

    }

})();