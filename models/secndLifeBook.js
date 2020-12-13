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
	// img: {
 //        data: Buffer,
 //        contentType: String
 //    },
	image_url: {
		type: String
		// default: 'images/2nd life books/cover1.jpg'
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		default: 'secndLifeBooks'
	} 
});

module.exports = mongoose.model('secndLifeBook', bookSchema);