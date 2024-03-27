import { createSlice } from "@reduxjs/toolkit";

const Toggleslice= createSlice({
    name:'toogle',
    initialState:{
        value:true
    },
    reducers:{
        change:(state,action)=>{
          
            state.value=!action.payload
            
        }   
    }
})
export const {change} = Toggleslice.actions
export default Toggleslice.reducer;