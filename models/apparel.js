const mongoose = require('mongoose');

const stuffSchema = mongoose.Schema({
	name: {type: String, required: true},
	desc: {type: String},
	image_url: {type: String},
	price: {type: Number,required: true},
	category: {
		type: String,
		default: 'apparel'
	}
});

module.exports = mongoose.model('apparel', stuffSchema);