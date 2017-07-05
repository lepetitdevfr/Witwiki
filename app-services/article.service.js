(function () {
    'use strict';

    angular
        .module('app')
        .factory('ArticleService', ArticleService);

    ArticleService.$inject = ['$http'];
    function ArticleService($http) {
        var service = {};

        service.CreateArticle = CreateArticle;
        service.GetAllArticles = GetAllArticles;
        service.UpdateArticle = UpdateArticle;

        return service;

        function GetAllArticles() {
            return $http.get('http://localhost:8080/getAllArticles').then(handleSuccess, handleError('Error creating user'));
        }
        // param.title , param.content, param.idCat, param.id
        function UpdateArticle(param) {
            return $http.post('http://localhost:8080/updateArticle',param).then(handleSuccess, handleError('Error creating user'));
        }
        // param.title , param.content, param.idCat
        function CreateArticle(param) {
            return $http.post('http://localhost:8080/addArticle',param).then(handleSuccess, handleError('Error creating user'));
        }
        // param.id
        function DeleteArticle(param) {
            return $http.post('http://localhost:8080/deleteArticle',param).then(handleSuccess, handleError('Error creating user'));
        }

        // private functions

        function handleSuccess(res) {
            return { success: true, data:res.data}
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
