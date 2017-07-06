var express    = require('express');
var cors 	   = require('cors')
var app        = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var passwordHash = require('password-hash');
var cred = require('./bdd');
var connection = mysql.createConnection(cred);

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

app.get('/getArticleById',function (req,res) {
	console.log("getArticleById");
	var params = req.query;
	connection.query('SELECT DISTINCT a.id, a.title, a.content, a.preface, a.date_add, a.date_update, c.id AS "catId", c.name AS "nameCat", u.pseudo AS "auteur" FROM article AS a,categorie AS c, user AS u WHERE a.id_categorie = c.id AND a.id_auteur=u.id AND a.id ='+params.id, function (error, results, fields) {
		if (error) {
			console.log(error);
			res.json(error)
		}else{
			res.json(results[0]);
		}
	});
});

app.get('/getArticles',function (req,res) {
	console.log("getArticles");
	var params = req.query;
	var cat;
	var tri;
	var articles;
	if (params.cat) {
		cat = '= '+params.cat;
	}else{
		cat = "IS NOT NULL";
	}
	if (params.tri === "date") {
		params.tri = 'date_update DESC';
	}
	if (params.tri === "title") {
		params.tri = "title ASC";
	}

	console.log('SELECT article.id, article.title, article.preface, article.date_add, article.date_update, categorie.id AS "idCat" ,categorie.name AS "nameCat", user.pseudo AS "auteur" FROM article, categorie, user WHERE article.id_categorie = categorie.id AND article.id_auteur = user.id AND id_categorie '+cat+' ORDER BY '+params.tri+' LIMIT '+params.page+',10');
	connection.query('SELECT article.id, article.title, article.preface, article.date_add, article.date_update, categorie.id AS "idCat" ,categorie.name AS "nameCat", user.pseudo AS "auteur" FROM article, categorie, user WHERE article.id_categorie = categorie.id AND article.id_auteur = user.id AND id_categorie '+cat+' ORDER BY '+params.tri+' LIMIT '+params.page+',10', function (error, results, fields) {
		if (error) {
			console.log(error);
			res.json(error)
		}else{
			// console.log(results);
			articles = results;
			console.log(articles);
		}
	});

	connection.query('SELECT COUNT(article.id) AS "nbArticle" FROM article, categorie, user WHERE article.id_categorie = categorie.id AND article.id_auteur = user.id AND id_categorie '+cat+' ORDER BY '+params.tri, function (error, results, fields) {
		if (error) {
			console.log(error);
			res.json(error)
		}else{
			console.log(results[0]);
			var response = {nbArticle:results[0].nbArticle,articles:articles};
			res.json(response);
		}
	});
});

app.post('/updateArticle', function (req,res) {
	console.log('updateArticle');
	var params = req.body;
	var date = new Date();
	connection.query("UPDATE article SET title='"+params.title+"',preface='"+params.preface+"',content='"+params.content+"',date_update=NOW(),id_categorie='"+params.idCat+"' WHERE id="+params.id, function (error, results, fields) {
		try{
			res.json({code:200});
		}catch(e){
			res.json({code:500,message:"Update error."})
		}
	})
});

app.post('/addArticle', function(req, res) {
	console.log("addArticle");
	var params = req.body;
	console.log(params);
	var date = new Date();
	connection.query('INSERT INTO article (title, content, preface, date_add, date_update, id_categorie, id_auteur) VALUES ("'+params.title+'","'+params.content+'","'+params.preface+'",NOW(),NOW(),"'+params.idCat+'","'+params.idAuteur+'")', function (error, results, fields) {
		if (error) {
			console.log(error);
			res.json(error)
		}else{
			console.log(results);
			res.json(results);
		}
	});
});

app.post('/deleteArticle', function(req, res) {
	console.log("deleteArticle");
	var params = req.body;
	connection.query('DELETE FROM article WHERE id='+params.id, function (error, results, fields) {
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
