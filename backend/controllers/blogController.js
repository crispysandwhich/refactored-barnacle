import Blog from '../models/Blog.js'

// @desc Gets all blogs
// route GET /api/blogs
// @access Public
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).populate("userId", "-password")
    return res.status(200).json(blogs)
  } catch (error) {
    return res.status(500).json(error)
  }
}

// @desc Gets a Single Blog
// route GET /api/blogs/:id
// @access Public
const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("userId", "-password")
    blog.views += 1
    await blog.save()
    return res.status(200).json(blog)
  } catch (error) {
    return res.status(500).json(error)
  }
}
// @desc Gets featured blogs
// route GET /api/blogs/featured
// @access Public
const getFeaturedBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({featured: true}).populate("userId", "-password").limit(3)
    return res.status(200).json(blogs)
  } catch (error) {
    return res.status(500).json(error)
  }
}

// @desc Creates a blog
// route PUT /api/blogs/create
// @access Private
const createBlog = async (req, res) => {

  // console.log(req.body, 'server')

  try {
    const blog = await Blog.create({...req.body, userId: req.user._id})
    return res.status(201).json(blog)
  } catch (error) {
    return res.status(500).json(error)
  }
}

// @desc Updates a blog
// route PUT /api/blogs/:id
// @access Private
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)

    if(blog.userId.toString() !== req.user._id.toString()) {
      throw new Error("Its not your post what are you trying to update")
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).populate('userId', '-password')

    return res.status(200).json(updatedBlog)

  } catch (error) {
    return res.status(500).json(error)
  }
}

// @desc Likes a blog
// route PUT /api/blogs/likeBlog/:id
// @access Private
const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    
    // console.log(req.user)

    if(blog.likes.includes(req.user._id)) {
      blog.likes = blog.likes.filter((userId) => userId !== req.user._id.toString())

      await blog.save()

      return res.status(200).json({message: 'disliked the blog'})
    } else {
      blog.likes.push(req.user._id)
      await blog.save()

      return res.status(200).json({message: 'liked the blog'})
    }

  } catch (err) {
    return res.status(500).json(err)
  }
}

// @desc Deletes a blog
// route PUT /api/deleteBlog/:id
// @access Private
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    if(blog.userId.toString() !== req.user._id.toString()) {
      throw new Error("This not your post")
    }

    await Blog.findByIdAndDelete(req.params.id)

    return res.status(200).json({message: 'deleted the blog'})

  } catch (error) {
    return res.status(500).json(error)
  }
}

const uploadImage = async (req, res) => {
    console.log(req.file, 'server')
    
    return res.status(200).json({message: 'Upload successful'})
  }

export {
  getBlogs,
  getSingleBlog,
  getFeaturedBlog,
  createBlog,
  updateBlog,
  likeBlog,
  deleteBlog,
  uploadImage
}