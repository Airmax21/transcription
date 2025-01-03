import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: '',
    isLogin: false,
    userId: ''
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            if (action.payload.token) {
                state.token = action.payload.token
                state.userId = action.payload.userId
                state.isLogin = true
            }
        }
    }
})

export const { loginUser } = authSlice.actions
export default authSlice.reducer