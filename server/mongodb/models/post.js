import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: String, required: true }, 
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const PostModel = mongoose.model('Post', Post);
export default PostModel;