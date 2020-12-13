const mongoose = require('mongoose');

const book = require('../models/book').schema
const secndLifeBook = require('../models/secndLifeBook').schema
const accessories = require('../models/accessories').schema
const apparel = require('../models/apparel').schema
const furniture = require('../models/furniture').schema

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	emailOrPhone: {
		type: String
	},
	favourites: {
		// type: book
		type: [book, secndLifeBook, accessories, apparel, furniture]
	},
	cart: {
		// type: asspparel
		type: [book, secndLifeBook, accessories, apparel, furniture]
	}
});

module.exports = mongoose.model('user', userSchema);