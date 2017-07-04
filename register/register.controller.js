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
            UserService.CreateUser(vm.user)
            .then(function (response) {
                console.log(response);
                if (response.success) {
                    if (response.data.code == "23000") {
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
        }
    }

})();
