(function () {
    'use strict';

    angular
        .module('app')
        .controller('addArticleController', addArticleController);

    addArticleController.$inject = ['ArticleService', '$rootScope', 'textAngularManager'];
    function addArticleController(ArticleService, $rootScope, textAngularManager) {
        var vm = this;

        initController();
        console.log(textAngularManager);
        function initController() {
            
        }

    }

})();