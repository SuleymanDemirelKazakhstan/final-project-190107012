// const express = require('express');
// const app = express();
// const path = require('path');
// // const router = express.Router();

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/project.html'));
// });

// app.get('/list-page',function(req,res){
//   res.sendFile(path.join(__dirname+'/list-page.html'));
// });
// // app.use(express.static());
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');



// const books_list = [{name:'The Picture of Dorian Gray', author:'Oscar Wilde', image_url:'images/books/dorian-gray.jpg', price: 12.99},{name:'Hamlet', author:'William Shakespeare', image_url:'images/books/hamlet.jpg', price:9.99}, {name:'Jane Eyre', author:'Charlotte Bronte', image_url:'images/books/jane-eyre.jpg', price:13.00}];

// const descs = [{name:'The Picture Of Dorian Gray', desc:''}, {name:'Hamlet', desc:''}, {name:'Jane Eyre', desc:''}]

const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const router = require('./routers/router');
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/finalprojectDB';

const app = express();

app.engine('handlebars', /*hbs.engine*/ exphbs({runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');
app.use(express.static('/images'));
app.use(router.router);

app.use(express.static(__dirname+'/public'));

/*var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);
 
var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);*/




app.get('/', (req, res) => {

			// const item = {list_page: books_list};
		res.render('intro');
			// db.close();
});

const book = require('./models/book')
const secndLifeBook = require('./models/secndLifeBook')
const accessories = require('./models/accessories')
const apparel = require('./models/apparel')
const furniture = require('./models/furniture')

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, ok) => {
	if (err) throw err;

	app.get('/showData', (req, res) => {
		book.find()
		.then(appar =>{
			res.json({
				conf: 'success',
				data: appar
			})
		})
	})

	app.get('/updateImgSrc', (req, res) => {
		const query = req.query;
		const bName = query.id;
		delete query['id'];
		book.findByIdAndUpdate(bName, query, {new:true})
		.then(it => {
			res.json({
				conf: 'success',
				data: it
			})
		})
		.catch(err => {
			res.json({
				conf: 'fail',
				message: err.message
			})
		})
	})

	app.get('/initialData', (req, res) => {
		const query = req.query;

		book.findByIdAndRemove(query.id)
		.then(data => {
			res.json({
				conf: 'success',
				data: query.id+"successfully removed"
			})
		})
		.catch(err => {
			res.json({
				conf: 'fail',
				message: err.message
			})
		})
	})

	app.listen(3000, () => console.log("LISTENING"));
});
 
	// app.get('/books', (req, res) => {
	// 	const item = {list_page: books_list};
	// 	res.render('list_page', item);
	// });
