### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

Clone the repository

```sh
$ git clone https://github.com/lepetitdevfr/Witwiki.git
```

Install the dependencies and devDependencies.

```sh
$ cd witwiki
$ npm install
```

Edit /node-wiki/bdd.js and set your MySql informations
```js
	// MySql informations
	var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'blog'
    });
```
Edit /node-wiki/gmail.js and set your mail informations
```js

	// Mail informations
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'YourGmailAddress',
			pass: 'yourPassword'
		}
	});
```

If you are using GMAIL, you have to activate this option.
https://myaccount.google.com/lesssecureapps

Start the server.
```sh
$ node server.js
```


### Arborescence :

- **app-content**  contient le custom CSS du site.
- **app-services** contient les fonctions qui permettent d’interagir avec le serveur NodeJS.
- **node-Wiki** contient le serveur NodeJS qui permet d’interagir avec la base de données et les fichiers pour l'import.
- **controller** contient les fonctions qui interagissent avec la vue.  
- **dist** contient les différents fichiers des bibliothèques utilisées (Bootstrap, etc...).
- **uploads** contient les fichiers importées par le site.
- **view** contient les différents vues du site.
- **app.js** contient les routes du site.