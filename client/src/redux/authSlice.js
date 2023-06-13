import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
  _id: null,
  username: null,
  email: null,
  toke: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      localStorage.clear()
      state._id = action.payload._id,
      state.username = action.payload.username,
      state.email = action.payload.email,
      state.toke = action.payload.toke
    },
    register(state, action) {
      localStorage.clear()
      state._id = action.payload._id,
      state.username = action.payload.username,
      state.email = action.payload.email,
      state.toke = action.payload.toke
    },
    logout(state) {
      state._id = null,
      state.username = null,
      state.email = null,
      state.toke = null
      localStorage.clear()
    }
  }
})


export const {register, login, logout} = authSlice.actions

export default authSlice.reducer