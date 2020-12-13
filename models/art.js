const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type:String,
		required: true
	},
	desc: {
		type: String
	},
	image_url: {
		type: String
	},
	category: {
		type: String,
		default: 'art'
	}
});

module.exports = mongoose.model('art', artSchema);