(function () {
    'use strict';

    angular
        .module('app')
        .controller('addArticleController', addArticleController);

    addArticleController.$inject = ['ArticleService', '$rootScope', 'textAngularManager'];
    function addArticleController(ArticleService, $rootScope, textAngularManager) {
        var vm = this;
        vm.htmlVariable = "";
        initController();

        console.log(textAngularManager);

        function initController() {
            console.log()
        }

        vm.getHtml = function(htmlVariable) {
            console.log(htmlVariable);
        }

    }

})();