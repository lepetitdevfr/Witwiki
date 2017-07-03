angular.module("app").factory("clientsFactory", function ()
{
    var clients =     [
                        {id:1, nom: 'dupont', prenom: 'pierre'},
                        {id:2, nom: 'dupont', prenom: 'paul'},
                        {id:3, nom: 'dupont', prenom: 'jacques'},
                        {id:4, nom: 'dupont', prenom: 'alice'}
                    ];
    var getClients = function() 
    {
        return clients;
    };
    var addClient = function(client)
    {
        var client = prepareClient(client);
        clients.push({id:client.id, nom:client.nom, prenom:client.prenom});
    };
    function prepareClient(client)
    {
        client.id = clients.length + 1;
        return client;
    }
    return {
        getClients: getClients,
        addClient: addClient
    };
});