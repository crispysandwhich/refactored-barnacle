// Create API requests for Express Router
import asyncHandler from 'express-async-handler' 
import Blog from '../model/blogModel.js'

// GET /api/blogs PUBLIC
const getAllBlogs = asyncHandler( async (req, res,) => {
  // console.log('cookies', req.cookies.jwt)
  const blogs = await Blog.find({}).populate("userId", "-password")
  res.status(200).json(blogs)
})

// GET /api/blogs/:id PUBLIC
const getSingleBlog = asyncHandler( async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findById(id).populate("userId", "-password")
  blog.views += 1
  await blog.save()
  res.status(200).json(blog)
})

// POST /api/blogs/create PRIVATE 
const createBlog = asyncHandler( async (req, res) => {
  // console.log(req.user)
  const blog = await Blog.create({...req.body, userId: req.user._id})
  res.status(200).json(blog)
})

// PUT /api/blogs/update/:id PRIVATE
const updateBlog = asyncHandler( async (req, res) => {
  const serverBlog = await Blog.findById(req.params.id)

  if(serverBlog.userId.toString() !== req.user._id.toString()){
    throw new Error('Sorry only owner can edit post')
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true } ).populate('userId', '-password')

  res.status(200).json(updatedBlog)
})

// delete /api/blogs/delete/:id PRIVATE
const deleteBlog = asyncHandler( async (req, res) => {

  const blog = await Blog.findById(req.params.id)

  if(blog.userId.toString() !== req.user._id.toString()){
    throw new Error('Sorry only owner can delete')
  }

  await Blog.findByIdAndDelete(req.params.id)

  res.status(200).json({message: `delete blog ${req.params.id}`})
})

// PUT /api/blogs/likeBlog/:id Private 
const likeBlog = asyncHandler( async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findById(id)

  if(blog.likes.includes(req.user.id)){
    blog.likes = blog.likes.filter((userId) => userId !== req.user._id.toString())
    await blog.save()
    res.status(200).json(`${req.user.username} has unliked the blog`)
  } else {
    blog.likes.push(req.user._id)
    await blog.save()
    res.status(200).json(`${req.user.username} has liked the blog`)
  }

})

// PUT /api/blogs/comment/:id Private
const commentOnBlog = asyncHandler( async(req,res) => {
  const { id } = req.params
  const { comment } = req.body

  const blog = await Blog.findById(id)

  blog.comments.push({comment, postedBy: req.user._id})

  await blog.save()

  res.status(200).json(blog)
})

// PUT /api/blogs/feature/:id Private
const featureBlog = asyncHandler( async(req,res) => {
  const blog = await Blog.findById(req.params.id)
  blog.featured = req.body.featured
  res.status(200).json(blog)
})

export {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  commentOnBlog,
  featureBlog
}