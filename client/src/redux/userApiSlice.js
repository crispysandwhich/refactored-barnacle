import { apiSlice } from './apiSlice.js'
const USERS_URL = '/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints:(builder) => ({
    // Calls the login endpoint from the server
    login: builder.mutation({ 
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data
      })
    }),
    // Calles the register endpoint from the server
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data
      })
    }),
    // Calls logout endpoint to logout through server
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = userApiSlice