import mongoose, { Schema, model } from 'mongoose';


export interface Post extends mongoose.Document {
    title: String,
    content: String,
    date: Date,
    offset: number
}

const PostSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    offset: Number
}, { timestamps: true });


const postModel = model<Post>('Post', PostSchema);

export default postModel;