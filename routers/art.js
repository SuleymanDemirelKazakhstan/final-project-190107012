console.log('from art');

const express = require('express');
// const art = require('../models/art')

const router  = express.Router();

const app = express();


// router.get('', (req, res) => {
// });
router.get('/', (req, res) => {

	// art.find()
	// .then(it => {
	// 	const item = {item: it}
	// 	console.log(item);
	// 	res.render('list_page', item)
	// });
});

module.exports = router;