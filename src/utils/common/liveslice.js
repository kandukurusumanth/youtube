import { createSlice } from "@reduxjs/toolkit";

const LiveSlice = createSlice({
    name:'livechat',
    initialState:{
        items:[]
    },
    reducers:{
        add:(state,action)=>{
            if(state.items.length===10){
                state.items.splice(0,1)
            }
            state.items.push(action.payload)
            
        }
    }
})
export const {add} = LiveSlice.actions
export default  LiveSlice.reducer