console.log('from user');

const express = require('express');
const user = require('../models/user')

const router  = express.Router();

const app = express();

router.get('/', (req, res) => {
	
	user.find()
	.then(it => {
		// const item = {item: it}
		// console.log(item);
		// res.render('list_page', item)
		res.json({
			conf: 'success',
			data: it
		})
	});
});

router.get('/sign_in', (req, res) => {
	res.render('sign_in')
})

router.get('/create_acc', (req, res) => {
	res.render('create_acc')
})

// router.get('/:name', (req, res) => {
// 	res.render('element_page')
// })

module.exports = router;