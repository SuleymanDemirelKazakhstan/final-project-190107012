console.log('from art');

const express = require('express');
const router  = express.Router();

const app = express();


// router.get('', (req, res) => {
// });
router.get('/', (req, res) => {
	res.render('list_page');
});

module.exports = router;