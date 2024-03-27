import { createSlice } from "@reduxjs/toolkit";

const Buttonlistslice = createSlice({
    name:'recommodations',
    initialState:{
        value:"new english trailer"
    },
    reducers:{
        buttonsearch:(state,action)=>{
           console.log(action.payload);
            state.value=action.payload
        }
    }
    
})
export const  {buttonsearch } = Buttonlistslice.actions
export default Buttonlistslice.reducer