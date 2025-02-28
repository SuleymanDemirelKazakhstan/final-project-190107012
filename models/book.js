const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	desc: {
		type: String
	},
	image_url: {
		type: String
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		default: 'books'
	}
});

module.exports = mongoose.model('book', bookSchema);