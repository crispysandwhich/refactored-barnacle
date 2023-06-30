import mongoose from "mongoose";
const { Schema } = mongoose;


const blogSchema = new Schema({

  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    rqeuired: true,
    min: 4
  },
  summary: {
    type: String,
    required: true,
    min: 12,
  },
  content: {
    type: String,
    required: true,
    min: 12,
  },
  photo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requried: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: [String],
    default: []
  }

}, {timestamps: true})




const Blog = mongoose.model('Blog', blogSchema)

export default Blog