console.log('from apparel');

const express = require('express');
const apparel = require('../models/apparel')

const router  = express.Router();

const app = express();


router.get('/', (req, res) => {
	
	apparel.find()
	.then(it => {
		const item = {item: it}
		// console.log(item);
		res.render('list_page', item)
	});
});

router.get('/:name', (req, res) => {
	let name = req.params.name;
	// let bname = wname.substring(0, wname.length-10);
	apparel.findOne({name: name})
	.lean()
	.then(it => {
		// console.log(it);
		// const item = {item: it}
		// const item = {item: it}
		// console.log(name  + "IT: " + it);
		res.render('element_page', it)
	})
});

module.exports = router;