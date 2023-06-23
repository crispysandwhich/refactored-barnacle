import { apiSlice } from "./apiSlice";

const BLOGS_URL = '/api/blogs'

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // calls the getallblogs endpoint from server
    getAll: builder.query({
      query: () => ({
        url: BLOGS_URL
      })
    }),
    // Get single blog
    getSingle: builder.query({
      query: (blogId) => ({
        url: `${BLOGS_URL}/${blogId}`
      })
    }),
    // Calls the createBlog endpoint from server
    createBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOGS_URL}/create`,
        method: 'POST',
        body: data
      }),
    }),
    // Call api to upload an image
    uploadImg: builder.mutation({
      query: (data) => ({
        url: `/upload`,
        method: 'POST',
        body: data,
      })
    })
  })
})

export const { 
  useGetAllQuery,
  useGetSingleQuery,
  useCreateBlogMutation, 
  useUploadImgMutation  
} = blogApiSlice;