import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    removeCredentials: (state,action) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    }},
})


export const {setCredentials, removeCredentials} = authSlice.actions

export default authSlice.reducer