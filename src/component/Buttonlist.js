import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {buttonsearch} from '../utils/common/buttonlistslice'
import Search from "../utils/common/search"
const Buttoncombo = ({name})=>{ 
    const dipacth = useDispatch();
    const recommodations = useSelector(state => state.recommodations.value)
    console.log(recommodations);
    return (
        <div className="p-2 m-2 bg-green-200 rounded">
            <button onClick={()=>{
                dipacth(buttonsearch({name}))
            }}> {name} </button>
        </div>
    )
}
const Buttonlist = ()=>{
    let arr = ["All", "Cricket", "music", "gaming", "tech" , "engineering", "football" , "rondlo", "messi", "kohli", "dhoni" , "motivi"]
    return (
        <div className="flex w-full h-13">
            {
                arr.map((obj,ind)=>{
                    return <Buttoncombo name={obj} key={ind} />
                })
            }
        </div>
    )
}
export default Buttonlist