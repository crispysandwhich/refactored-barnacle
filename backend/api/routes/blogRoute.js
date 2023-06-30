import express from "express";
import { getAllBlogs, getSingleBlog, getFeaturedBlog, likeBlog, deleteBlog } from "../controller/blogController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// GET /api/blog
router.get("/", getAllBlogs);

// GET /api/blog/featured
router.get("/featured", getFeaturedBlog)

// GET /api/blog/:id
router.get("/:id", getSingleBlog);

// PUT /api/blog/:id/like
router.put("/:id/like", likeBlog)

// DELETE /api/blog/delete/:id
router.delete("/:id/delete", deleteBlog)

export default router;
