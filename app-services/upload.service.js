(function () {
    'use strict';

    angular
        .module('app')
        .factory('UploadService', UploadService);

    UploadService.$inject = ['$http'];
    function UploadService($http) {
        var service = {};
        service.AddMedia = AddMedia;
        service.GetMedia = GetMedia;
        return service;

        // param.url , param.com, param.idCat
        function AddMedia(param) {
            return $http.post('http://localhost:8080/addMedia',param).then(handleSuccess, handleError('Error creating user'));
        }

        // param.idCat
        function GetMedia(param) {
            return $http.get('http://localhost:8080/getMedia',{params:param}).then(handleSuccess, handleError('Error creating user'));
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