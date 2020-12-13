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




const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const router = require('./routers/router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'));



app.get('/', (req, res) => {
		res.render('intro');
});

const book = require('./models/book')
const secndLifeBook = require('./models/secndLifeBook')
const accessories = require('./models/accessories')
const apparel = require('./models/apparel')
const furniture = require('./models/furniture')

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, ok) => {
	if (err) throw err;


	// let search = document.querySelector('.search');


	app.get('/showData', (req, res) => {
		furniture.find()
		.then(it =>{
			res.json({
				conf: 'success',
				data: it
			})
		})
	})

	app.get('/update', (req, res) => {
		const query = req.query;
		const bName = query.id;
		delete query['id'];
		furniture.findByIdAndUpdate(bName, query, {new:true})
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