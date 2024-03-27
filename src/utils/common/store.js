import { configureStore } from "@reduxjs/toolkit";
import Toogleslice from "./toogleslice";
import Buttonlistslice from "./buttonlistslice";

const Store = configureStore({
    reducer:{
        toogle:Toogleslice,
        recommodations:Buttonlistslice
    }
})
export default Store