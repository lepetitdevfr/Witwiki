var express    = require('express');
var cors 	   = require('cors')
var app        = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var passwordHash = require('password-hash');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'witwiki'
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

app.get('/getAllUsers',function (req,res) {
	connection.query('SELECT pseudo, lastname, firstname, email, id_role FROM user', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.json(results);
	});
})

app.get('/getAllRoles',function (req,res) {
	connection.query('SELECT * FROM role', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		res.json(results);
	});
})

app.post('/addUser', function(req, res, next) {
	var params = req.body;
	console.log(params);
	var pswd = passwordHash.generate(params.password);
	connection.query('INSERT INTO user (pseudo, lastname, firstname, email, password, id_role) VALUES ("'+params.pseudo+'","'+params.lastname+'","'+params.firstname+'","'+params.email+'","'+pswd+'","3")', function (error, results, fields) {
		if (error) {
			res.json(error)
		}else{
			res.json(results);
		}
	});
});

app.post('/login', function (req, res, next) {
	var params = req.body;
	connection.query("SELECT * FROM user WHERE pseudo='"+params.pseudo+"'",function (error, results, fields) {
		console.log(results);
		try{
			if (passwordHash.verify(params.password, results[0].password)) {
					delete results[0].password;
					res.json({code:200,data:results[0]});
				}else{
					res.json({code:500,message:"Identifiant ou Mot de passe incorrecte."})
				}
		}catch(e){
				console.log(e);
				res.json({code:404,message:"Identifiant inconnu."})

		}
	})
});

app.post('/updateRole', function (req,res,next) {
	var params = req.body;
	connection.query("UPDATE user SET id_role="+params.role+" WHERE pseudo="+params.pseudo , function (error, results, fields) {
		console.log(results);
		try{
			res.json({code:200});
		}catch(e){
			res.json({code:500,message:"Update error."})
		}
	})
})

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
