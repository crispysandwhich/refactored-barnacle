// Works with local storage
import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // Sets data into local storage
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    // Removes data from local storage
    removeCredentials: (state,action) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    }},
})


export const { setCredentials, removeCredentials } = authSlice.actions

export default authSlice.reducer