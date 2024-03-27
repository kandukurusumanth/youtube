import Mainvideocont from "./Mainvideocontainer"
import Sidebar from "./SIdebar"
import React from "react"
const Body = ()=>{
    return(
        <>  
            <div className="grid grid-flow-col p-2 m-2">
                <Sidebar/>
                <Mainvideocont/>

            </div>
           
        </>
    )
}
export default Body