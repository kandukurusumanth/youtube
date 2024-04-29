import { useState } from "react"
import Comment from "./Commet";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../utils/common/liveslice";
const Input = ()=>{
    
    let [ser,setser] = useState("");
    let dispatch = useDispatch();

    return (
        
            <>
                 <div className="p-2 m-2">
                    <input type="text"  className="p-2 m-2 bg-gray-100" 
                        onChange={e => { setser(e.target.value)}}
                        value={ser}
                    /> 
                    <button className="p-2 m-2 bg-green-300 rounded-md" onClick={()=>{
                        dispatch(add(ser))
                        setser("")
                        
                        
                        
                    }}
                    > send </button>
                </div>
                <div>
                   <span> Comments:</span>
                   <Comment/>
                </div>
            </>
            
    )
}
export default Input