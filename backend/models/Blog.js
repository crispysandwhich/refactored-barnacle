import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
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
  description: {
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

const Blog = mongoose.model('Blog', BlogSchema)

export default Blog