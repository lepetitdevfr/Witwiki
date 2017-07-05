(function () {
    'use strict';
    angular.module('app').controller('AdminController', AdminController);
    AdminController.$inject = ['UserService', '$rootScope', '$location', 'CatService'];
    function AdminController(UserService, $rootScope, $location, CatService) {
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
            var newCat = {name:cat.name, id:cat.id};
            CatService.UpdateCat(newCat)
            .then(function (response) {
            });
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
                vm.allUsers = content.data;
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
                vm.allCat = content.data;
            });
        }

        init();
    }

})();
