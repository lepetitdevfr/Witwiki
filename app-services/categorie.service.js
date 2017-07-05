(function () {
    'use strict';

    angular
        .module('app')
        .factory('CatService', CatService);

    CatService.$inject = ['$http'];
    function CatService($http) {
        var service = {};

        service.CreateCat = CreateCat;
        service.GetAllCat = GetAllCat;
        service.UpdateCat = UpdateCat;

        return service;

        function GetAllCat() {
            return $http.get('http://localhost:8080/getAllCat').then(handleSuccess, handleError('Error creating user'));
        }
        // param.name , param.id
        function UpdateCat(param) {
            console.log(param);
            return $http.post('http://localhost:8080/updateCat',param).then(handleSuccess, handleError('Error creating user'));
        }
        // param.name
        function CreateCat(param) {
            return $http.post('http://localhost:8080/addCat',param).then(handleSuccess, handleError('Error creating user'));
        }
        // param.id
        function DeleteCat(param) {
            return $http.post('http://localhost:8080/deleteCat',param).then(handleSuccess, handleError('Error creating user'));
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
