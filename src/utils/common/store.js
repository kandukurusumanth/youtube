import { configureStore } from "@reduxjs/toolkit";
import Toogleslice from "./toogleslice";
import Buttonlistslice from "./buttonlistslice";
import Suggestion from "../../component/Suggestion";
import Subscriptionslice from "./subscriptionslice";
import SuggestionSlice from './Suggestion-cache'
import liveslice from "./liveslice";

const Store = configureStore({
    reducer:{
        toogle:Toogleslice,
        recommodations:Buttonlistslice,
        subscription:Subscriptionslice,
        sug_cache:SuggestionSlice,
        livechat:liveslice
    }
})
export default Store