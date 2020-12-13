console.log('from 2nd life books');

const express = require('express');
const secndLifeBook = require('../models/secndLifeBook')

const router  = express.Router();

const app = express();


router.get('/', (req, res) => {

	secndLifeBook.find()
	.then(it => {
		const item = {item: it}
		// console.log(item);
		res.render('list_page', item)
	});
});

router.get('/post_ad', (req, res) => {
	res.render('post_ad')
})
router.post('/post_ad', (req, res) => {
	// var name = req.body.name;
	// var author = req.body.author;
	// var desc = req.body.desc;
	// var img = req.body.img;
	// var price = req.body.price;

	// secndLifeBook.create({name: name, author: author, desc: desc, price: price})
	// .then(it => {
	// 	console.log(it);
	// })
	// .catch(err => {console.log(err.message)})

	// res.redirect('/list_page', secndLifeBook)
	console.log(req.body)
	res.json({
		conf: 'success',
		data: req.body + ' ' + req.body.name
	})
})

router.get('/:name', (req, res) => {
	let name = req.params.name;
	// let bname = wname.substring(0, wname.length-10);
	secndLifeBook.findOne({name: name})
	.lean()
	.then(it => {
		// console.log(it);
		// const item = {item: it}
		// const item = {item: it}
		// console.log("BOOKNAME:"+name  + "IT: " + it);
		res.render('element_page', it)
	})
});

module.exports = router;