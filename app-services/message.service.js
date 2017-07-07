(function () {
    'use strict';

    angular
        .module('app')
        .factory('MessageService', MessageService);

    MessageService.$inject = ['$http'];
    function MessageService($http) {
        var service = {};
        service.GetMessageIn = GetMessageIn;
        service.GetMessageOut = GetMessageOut;
        service.AddMessage = AddMessage;
        service.ReadMessage = ReadMessage;

        return service;

        // param.idUser
        function GetMessageIn(param) {
            return $http.get('http://localhost:8080/getMessageIn', {params:param}).then(handleSuccess, handleError('Error creating user'));
        }

        // param.idUser
        function GetMessageOut(param) {
            return $http.get('http://localhost:8080/getMessageOut', {params:param}).then(handleSuccess, handleError('Error creating user'));
        }
        // param.title , param.content, param.from, param.to
        function AddMessage(param) {
            return $http.post('http://localhost:8080/addMessage',param).then(handleSuccess, handleError('Error creating user'));
        }
        // param.id
        function ReadMessage(param){
            return $http.post('http://localhost:8080/readMessage',param).then(handleSuccess, handleError('Error creating user'));
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
