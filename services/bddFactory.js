angular.module("app").factory("bddFactory", function ()
{
    function generateReq(type,object) {
        switch (type) {
            case "INSERT":

                break;
            case "UPDATE":

                break;

            case "DELETE":

                break;
            default:

        }
    }


    return {
        getClients: getClients,
        addClient: addClient
    };
});
