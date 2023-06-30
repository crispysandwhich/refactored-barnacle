import Blog from '../model/blogModel.js'

// GET /api/blog/ 
const getAllBlogs = async (req, res) => {
  res.status(200).json('Here are all the blogs')
}

// GET /api/blog/featured
const getFeaturedBlog = async (req, res) => {
  res.status(200).json('Here is a featured blog')
}

// GET /api/blog/:id
const getSingleBlog = async (req, res) => {
  res.status(200).json('Here is a single blog')
}


// POST /blog/create
const createBlog = async (req, res) => {

  try {
    const blog = await Blog.create({...req.body, userId: req.user._id})
    res.status(200).json(blog)
  } catch (error) {
    res.status(404).json({message: 'Failed to create blog'})
  }

}

// PUT /blog/update
const updateBlog = async (req, res) => {
  res.status(200).json('Updated a blog')
}

// PUT api/blog/:id/like
const likeBlog = async (req, res) => {
  res.status(200).json('Likeed Blog')
}

// delete /api/blog/delete/:id
const deleteBlog = async (req, res) => {
  res.status(200).json("deketed")
}


export {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  getFeaturedBlog,
  likeBlog,
  deleteBlog
}