const express = require('express');
const router  = express.Router();
const blog = require('./blog');
const books = require('./books');
const art = require('./art');
const accer = require('./accessories');
const apparel = require('./apparel');
const furniture = require('./furniture');
const secndLifeBooks = require('./secndLifeBooks')

router.use('/blog', blog);
router.use('/books', books);
router.use('/art', art);
router.use('/accessories', accer);
router.use('/apparel', apparel);
router.use('/furniture', furniture);
router.use('/secndLifeBooks', secndLifeBooks);

module.exports.router = router;