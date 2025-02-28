const mongoose = require('mongoose');

const stuffSchema = mongoose.Schema({
	name: {type: String, required: true},
	desc: {type: String},
	image_url: {type: String},
	price: {type: Number,required: true},
	category: {
		type: String,
		default: 'furniture'
	}
});

module.exports = mongoose.model('furniture', stuffSchema);