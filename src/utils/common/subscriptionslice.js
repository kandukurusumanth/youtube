import { createSlice } from "@reduxjs/toolkit";

const Subscriptionslice = createSlice({
    name:'subscription',
    initialState:{
        items:[]
    },
    reducers:{
        addsubscription : (state,action)=>{
            state.items.push(action.payload)
        },
        removesubscription:(state,action)=>{
            let element =state.items.indexOf(action.payload);
            state.items.splice(element,1);

        }
    }
})
export const {addsubscription,removesubscription} = Subscriptionslice.actions
export default Subscriptionslice.reducer