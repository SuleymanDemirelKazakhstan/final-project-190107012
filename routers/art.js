console.log('from art');

const express = require('express');
const art = require('../models/art')

const router  = express.Router();

const app = express();

router.get('/', (req, res) => {

	art.find()
	.then(it => {
		const item = {item: it}
		console.log(item);
		res.render('art_list_page', item)
	});
});

router.get('/:name', (req, res) => {
	let name = req.params.name;
	
	art.findOne({name: name})
	.lean()
	.then(it => {
		res.render('art_element_page', it)
	})
})

module.exports = router;