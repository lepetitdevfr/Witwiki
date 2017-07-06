(function () {
    'use strict';

    angular
        .module('app')
        .factory('MessageService', MessageService);

    MessageService.$inject = ['$http'];
    function MessageService($http) {
        var service = {};


        return service;

        // {cat: "41", tri: "date", page: 10}
        function GetArticles(param) {
            return $http.get('http://localhost:8080/getArticles', {params:param}).then(handleSuccess, handleError('Error creating user'));
        }
        // param.title , param.content, param.idCat, param.id
        function UpdateArticle(param) {
            return $http.post('http://localhost:8080/updateArticle',param).then(handleSuccess, handleError('Error creating user'));
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