const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
    },
    token: {
        type: String,
        default: null,
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;