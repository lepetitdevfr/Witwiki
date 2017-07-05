(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('AdminController', AdminController);
    app.$inject = [ 'UserService', '$rootScope', '$location', 'CatService', 'ngTable'];

    function AdminController(UserService, $rootScope, $location, CatService, NgTableParams) {
        var vm = this;

        function init() {
            if ($rootScope.globals.currentUser.id_role == "1") {
                loadAllUsers();
                loadAllRoles();
                loadAllCat();
            }else {
                $location.path('/');
            }
        }

        vm.addCat = function() {
            var cat = vm.newCat;
            if (cat != "") {
                var newCat = {name:cat};
                CatService.CreateCat(newCat)
                .then(function (response) {
                    vm.newCat = "";
                    loadAllCat();
                });
            }
        }

        vm.updateRoleUser = function(user) {
            var newRoleUSer = {pseudo:user.pseudo, role:user.id_role};
            UserService.UpdateRole(newRoleUSer)
            .then(function (response) {
            });
        }

        vm.updateCat = function(cat) {
            if (cat.name != "") {
                var newCat = {name:cat.name, id:cat.id};
                CatService.UpdateCat(newCat)
                .then(function (response) {
                });
            }
        }

        vm.deleteCat = function(idCat) {
            var idCat = {id:idCat};
            CatService.DeleteCat(idCat)
            .then(function (content) {
                loadAllCat();
            });
        }

        function loadAllUsers() {
            UserService.GetAllUsers()
            .then(function (content) {
                vm.allUsers = new NgTableParams({}, { dataset: content.data});
            });
        }

        function loadAllRoles() {
            UserService.GetAllRoles()
            .then(function (content) {
                vm.allRoles = content.data;
            });
        }

        function loadAllCat() {
            CatService.GetAllCat()
            .then(function (content) {
                vm.allCat = new NgTableParams({}, { dataset: content.data});
            });
        }

        init();
    }

})();
