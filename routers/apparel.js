console.log('from apparel');

const express = require('express');
const router  = express.Router();

const app = express();


router.get('/', (req, res) => {
	res.render('list_page')
});

router.get('/:name', (req, res) => {
	res.render('element_page')
});

module.exports = router;