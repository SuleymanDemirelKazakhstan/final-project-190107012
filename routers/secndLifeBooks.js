console.log('from 2nd life books');

const express = require('express');
const secndLifeBook = require('../models/secndLifeBook')

const router  = express.Router();

const app = express();


router.get('/', (req, res) => {

	secndLifeBook.find()
	.then(it => {
		const item = {item: it}
		console.log(item);
		res.render('list_page', item)
	});
});

router.get('/:name', (req, res) => {
	res.render('element_page')
})

module.exports = router;