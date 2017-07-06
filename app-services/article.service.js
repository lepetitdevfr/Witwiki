(function () {
    'use strict';

    angular
        .module('app')
        .factory('ArticleService', ArticleService);

    ArticleService.$inject = ['$http'];
    function ArticleService($http) {
        var service = {};

        service.CreateArticle = CreateArticle;
        service.GetArticleById = GetArticleById;
        service.GetArticles = GetArticles;
        service.UpdateArticle = UpdateArticle;
        service.DeleteArticle = DeleteArticle;
        return service;

        // param.id
        function GetArticleById(param) {
            return $http.get('http://localhost:8080/getArticleById', {params:param}).then(handleSuccess, handleError('Error creating user'));
        }
        // {cat: "41", tri: "date", page: 10}
        function GetArticles(param) {
            return $http.get('http://localhost:8080/getArticles', {params:param}).then(handleSuccess, handleError('Error creating user'));
        }
        // param.title , param.content, param.idCat, param.id
        function UpdateArticle(param) {
            return $http.post('http://localhost:8080/updateArticle',param).then(handleSuccess, handleError('Error creating user'));
        }
        // param.title , param.content, param.preface ,param.idCat, param.idAuteur
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
