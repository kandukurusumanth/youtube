import { useEffect, useState } from "react"
import Buttonlist from "./Buttonlist"
import Video from "./Video"
import { YOUTUBE_API } from "../utils/common/constant"

const Mainvideocont = ()=>{
   
    return (
        <>
           <div className="col-span-11">
                <Buttonlist/>
                <Video/>    
           </div>
        </>
    )
}
export default Mainvideocont