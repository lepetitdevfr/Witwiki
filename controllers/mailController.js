angular.module("app").controller("mainController", function ($scope, clientsFactory)
{
    $scope.clients = clientsFactory.getClients();
    
    $scope.addClient = function(client)
    {
        clientsFactory.addClient(client);
        $scope.newClient.nom='';
        $scope.newClient.prenom='';
    }
});