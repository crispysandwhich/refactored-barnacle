import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: [String],
    default: []
  },
  comments: [
    {
      comment: String,
      created: { type: Date, default: Date.now},
      postedBy: { type: mongoose.Types.ObjectId, ref: "User" }
    }
  ],

}, {timestamps: true})


const Blog = mongoose.model('Blog', blogSchema)

export default Blog