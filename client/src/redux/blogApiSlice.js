import { apiSlice } from './apiSlice.js'
const BLOGS_URL = 'api/blogs'

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // calls the getallblogs endpoint from server
    getAllBlogs: builder.query({
      query: (data) => ({
        url: BLOGS_URL,
        method: 'GET',
        body: data
      })
    }),
    // Calls the createBlog endpoint from server
    createBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOGS_URL}/create`,
        method: 'POST',
        body: data
      }),
    })
  })
})

export const { 
  useCreateBlogMutation, 
  useGetAllBlogsQuery  
} = blogApiSlice;