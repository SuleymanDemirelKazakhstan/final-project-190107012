const express = require('express');
const router  = express.Router();
const blog = require('./blog');
const books = require('./books');
const art = require('./art');
const accessories = require('./accessories');
const apparel = require('./apparel');
const furniture = require('./furniture');
const secndLifeBooks = require('./secndLifeBooks')
const user = require('./user')
const search = require('./search')

router.use('/user', user)
router.use('/search', search)
router.use('/blog', blog);
router.use('/books', books);
router.use('/art', art);
router.use('/accessories', accessories);
router.use('/apparel', apparel);
router.use('/furniture', furniture);
router.use('/secndLifeBooks', secndLifeBooks);

module.exports.router = router;