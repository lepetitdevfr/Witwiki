(function () {
    'use strict';

    angular
    .module('app')
    .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;
        function register() {
            vm.dataLoading = true;
            if (validateEmail(vm.user.email)) {
                UserService.CreateUser(vm.user)
                .then(function (response) {
                    if (response.success) {
                        if (response.data.sqlState == "23000") {
                            FlashService.Error("Pseudo ou Email déjà utilisé");
                            vm.dataLoading = false;
                        }else{
                            FlashService.Success('Registration successful', true);
                            $location.path('/login');
                        }
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
            }else {
                FlashService.Error("Adresse email invalide.");
                vm.dataLoading = false;
            }
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

})();
