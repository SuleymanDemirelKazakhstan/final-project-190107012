console.log('from search');

const express = require('express');
const book = require('../models/book')
const secndLifeBooks = require('../models/secndLifeBook')
const apparel = require('../models/apparel')
const accessories = require('../models/accessories')
const furniture = require('../models/furniture')

const router  = express.Router();

const app = express();

router.post('/', (req, res) => {

	let toSearch = req.query.search;


	console.log(toSearch)
	apparel.find({name: toSearch})
	.then(it => {
		// const item = {item: it}
		// console.log(item);
		// res.render('list_page', item)
		res.json({
			toFind: toSearch,
			conf: 'success',
			data: it
		})
	});
});



module.exports = router;