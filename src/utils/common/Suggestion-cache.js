import { createSlice } from "@reduxjs/toolkit";

const SuggestionSlice =createSlice({
    name:'sug_cache',
    initialState:{
        obj:{}
    },
   reducers:{
        addsug:(state,action)=>{
                state.obj={...action.payload , ...state.obj}
                
                
        }
   }
}) 
export const {addsug} = SuggestionSlice.actions
export default SuggestionSlice.reducer