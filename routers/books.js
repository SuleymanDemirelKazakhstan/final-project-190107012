console.log('from books');

const express = require('express');
const book = require('../models/book')

const router  = express.Router();

const app = express();



router.get('/', (req, res) => {
	
	// res.render('list_page', item)
	book.find()
	.then(it => {
		const item = {item: it}
		console.log(item);
		res.render('list_page', item)
	});
});

router.get('/:name', (req, res) => {
	let bname = req.params.name;
	book.find({name: bname})
	.lean()
	.then(it => {
		// console.log(it);
		// const item = {item: it}
		const item = {item: it}
		console.log("BOOK NAME: "+bname + "ITEM: " + item + "IT: " + it);
		res.render('element_page', item)
	})
});

module.exports = router;