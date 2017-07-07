(function () {
    'use strict';

    angular
    .module('app')
    .controller('UploadController', UploadController);

    UploadController.$inject = ['$rootScope', '$routeParams', 'Upload', 'CatService', 'UploadService'];
    function UploadController($rootScope, $routeParams, Upload, CatService, UploadService) {
        var vm = this;

        initController();

        function initController() {
            loadAllCat();
            loadAllMedia();
        }

        vm.submit = function(){ //function to call on form submit
            if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
                vm.upload(vm.file); //call upload function
            }
        }

        vm.upload = function (file) {
            Upload.upload({
                url: 'http://localhost:8080/upload', //webAPI exposed to upload the file
                data:{file:file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                console.log(resp);
                if(resp.data.error_code === 0){ //validate success
                    console.log('Success ' + resp.config.data.file.name + ' uploaded.');
                    var param = {idCat:vm.idCat,com:vm.commentaire,url:"./uploads/"+resp.data.file.filename}
                    UploadService.AddMedia(param)
                    .then(function (content) {
                        vm.allCat = content.data;
                    });
                } else {
                    console.log('an error occured');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
                $window.alert('Error status: ' + resp.status);
            }, function (evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            });
        };

        function loadAllCat() {
            var mediaParam = {}
            CatService.GetAllCat()
            .then(function (content) {
                vm.allCat = content.data;
            });
        }

        function loadAllMedia() {
            var mediaParam = {}
            UploadService.GetMedia(mediaParam)
            .then(function (content) {
                vm.medias = content.data;
                console.log(vm.medias);
            });
        }


    }

})();

// http://localhost:8888/witwiki/uploads/
