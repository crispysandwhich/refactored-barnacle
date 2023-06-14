import { apiSlice } from './apiSlice.js'
const USERS_URL = '/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints:(builder) => ({
    login: builder.mutation({ 
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation } = userApiSlice