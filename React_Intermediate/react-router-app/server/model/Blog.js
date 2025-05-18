const mongoose = require('mongoose');
const { Schema } = mongoose;
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        default: null,
    },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;