import { Schema, model, models } from 'mongoose';
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: 'Anonymous',
    },
    category: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
    },
    userName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    coverImage: {
        type: String,
    },
});

const Blogs = models.Blogs || model('Blogs', blogSchema);

export default Blogs;
