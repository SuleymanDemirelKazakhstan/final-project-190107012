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
// app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'));

const book = require('./models/book')
const secndLifeBook = require('./models/secndLifeBook')
const accessories = require('./models/accessories')
const apparel = require('./models/apparel')
const furniture = require('./models/furniture')
const art = require('./models/art')

// Handlebars.registerHelper('ifeq', function (a, b, options) {
// 	    if (a == b) { return options.fn(this); }
// 	    return options.inverse(this);
// });

app.get('/', (req, res) => {
		res.render('intro');
});

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, ok) => {
	if (err) throw err;



	app.get('/showData', (req, res) => {
		art.find()
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
		// const query = req.query;

		// book.findByIdAndRemove(query.id)
		// .then(data => {
		// 	res.json({
		// 		conf: 'success',
		// 		data: query.id+"successfully removed"
		// 	})
		// })
		// .catch(err => {
		// 	res.json({
		// 		conf: 'fail',
		// 		message: err.message
		// 	})
		// })

		// art.create({name: 'Girl with a Pearl Earring', author: 'Johannes Vermeer', desc: "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the large pearl earring worn by the girl portrayed there. The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary treatments. In 2006, the Dutch public selected it as the most beautiful painting in the Netherlands.", image_url: '/images/art/pearl_earring.jpg'}, {name: 'The Creation Of Adam', author: 'Michelangelo', desc: "The image of the near-touching hands of God and Adam has become iconic of humanity. The painting has been reproduced in countless imitations and parodies. Michelangelo's Creation of Adam is one of the most replicated religious paintings of all time.", image_url: '/images/art/Creation_of_Adam.jpg'})
		// art.remove()
		// .then(it => {
		// 	res.json({
		// 		data: it
		// 	})
		// })
	})

	app.listen(3000, () => console.log("LISTENING"));
});