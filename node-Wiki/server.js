var express    = require('express');
var cors 	   = require('cors')
var app        = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var passwordHash = require('password-hash');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
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


// LOGIN
// =============================================================================
app.post('/login', function (req, res) {
	console.log("login");
	var params = req.body;
	connection.query("SELECT * FROM user WHERE pseudo='"+params.pseudo+"'",function (error, results, fields) {
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

// USER
// =============================================================================
app.get('/getAllUsers',function (req,res) {
	console.log("getAllUsers");
	connection.query('SELECT pseudo, lastname, firstname, email, id_role FROM user', function (error, results, fields) {
		if (error) throw error;
		res.json(results);
	});
});

app.post('/addUser', function(req, res) {
	console.log("addUser");
	var params = req.body;
	var pswd = passwordHash.generate(params.password);
	connection.query('INSERT INTO user (pseudo, lastname, firstname, email, password, id_role) VALUES ("'+params.pseudo+'","'+params.lastname+'","'+params.firstname+'","'+params.email+'","'+pswd+'","3")', function (error, results, fields) {
		if (error) {
			res.json(error)
		}else{
			res.json(results);
		}
	});
});


// ROLES
// =============================================================================
app.get('/getAllRoles',function (req,res) {
	console.log("getAllRoles");
	connection.query('SELECT * FROM role', function (error, results, fields) {
		if (error) throw error;
		res.json(results);
	});
});

app.post('/updateRole', function (req,res) {
	console.log('updateRole');
	var params = req.body;
	connection.query("UPDATE user SET id_role="+params.role+" WHERE pseudo='"+params.pseudo+"'", function (error, results, fields) {
		try{
			res.json({code:200});
		}catch(e){
			res.json({code:500,message:"Update error."})
		}
	})
});

// CATEGORY
// =============================================================================

app.get('/getAllCat',function (req,res) {
	console.log("getAllCat");
	connection.query('SELECT * FROM categorie', function (error, results, fields) {
		if (error) throw error;
		res.json(results);
	});
});

app.post('/updateCat', function (req,res) {
	console.log('updateCat');
	var params = req.body;
	connection.query("UPDATE categorie SET name='"+params.name+"' WHERE id="+params.id, function (error, results, fields) {
		try{
			res.json({code:200});
		}catch(e){
			res.json({code:500,message:"Update error."})
		}
	})
});

app.post('/addCat', function(req, res) {
	console.log("addCat");
	var params = req.body;
	connection.query('INSERT INTO categorie (name) VALUES ("'+params.name+'")', function (error, results, fields) {
		if (error) {
			res.json(error)
		}else{
			res.json(results);
		}
	});
});

app.post('/deleteCat', function(req, res) {
	console.log("deleteCat");
	var params = req.body;
	connection.query('DELETE FROM categorie WHERE id='+params.id, function (error, results, fields) {
		if (error) {
			res.json(error)
		}else{
			res.json(results);
		}
	});
});

// ARTICLES
// =============================================================================

app.get('/getAllArticles',function (req,res) {
	console.log("getAllArticles");
	connection.query('SELECT * FROM articles', function (error, results, fields) {
		if (error) throw error;
		res.json(results);
	});
});

app.post('/updateArticle', function (req,res) {
	console.log('updateArticle');
	var params = req.body;
	connection.query("UPDATE article SET title='"+params.title+"',content='"+params.content+"',id_categorie='"+params.idCat+"' WHERE id="+params.id, function (error, results, fields) {
		try{
			res.json({code:200});
		}catch(e){
			res.json({code:500,message:"Update error."})
		}
	})
});

app.post('/addArticles', function(req, res) {
	console.log("addArticles");
	var params = req.body;
	connection.query('INSERT INTO article (title, content, id_categorie) VALUES ("'+params.title+'","'+params.content+'","'+params.idCat+'")', function (error, results, fields) {
		if (error) {
			res.json(error)
		}else{
			res.json(results);
		}
	});
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
