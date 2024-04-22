
import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name: 'userTable',
    initialState:{
        users:[]
    },
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },

        removeUser:(state,action)=>{
           
           return {users: state.users.filter((item)=>item.id!=action.payload.id)}
        }
    }
})



export const {addUser, removeUser}=UserSlice.actions;

export default UserSlice.reducer;