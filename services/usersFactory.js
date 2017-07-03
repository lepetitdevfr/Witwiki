angular.module("app").factory("usersFactory", function ()
{
    var users =   [
                        // {id:1, nom: 'dupont', prenom: 'pierre'},
                        // {id:2, nom: 'dupont', prenom: 'paul'},
                        // {id:3, nom: 'dupont', prenom: 'jacques'},
                        // {id:4, nom: 'dupont', prenom: 'alice'}
                    ];
    var getUsers = function() 
    {
        return users;
    };
    var addUser = function(user)
    {
        var user = prepareUser(user);
        users.push({id:user.id, nom:user.nom, prenom:user.prenom});
    };
    function prepareUser(user)
    {
        User.id = Users.length + 1;
        return user;
    }

    var createUser = function(user) {
        console.log(JSON.stringify(user));
    }
    return {
        getUsers: getUsers,
        addUser: addUser,
        createUser: createUser
    };
});