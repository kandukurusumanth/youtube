import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addsubscription, removesubscription } from "../utils/common/subscriptionslice";
import Comment  from "./Commet";
const WatchPage =()=>{
    const dispatch = useDispatch();
    let {id} = useParams()
    
    let [Subscripe,setsubscripe] = useState('Subscripe')
    let [Subscripechager,setsubscripechanger] = useState(true)
    
    return (
        <div className="m-10 w-[900px] h-[1000px] ">
             <iframe className="rounded-xl w-full h-1/2"  src={"https://www.youtube.com/embed/" + id} frameBorder="0" allowFullScreen></iframe>
             <div className="flex justify-between m-5">
                <h1 className="font-bold text-xl p-2 m-2">Take u Forward </h1>
                {
                Subscripechager ? <button className="p-2 m-2 bg-green-300  rounded-lg" onClick={()=>{
                        setsubscripe("Subscriped");
                        setsubscripechanger(false);
                        dispatch(addsubscription(id))
                    }}> {Subscripe}</button> : <button className="p-2 m-2 bg-green-300  rounded-lg" onClick={()=>{
                        setsubscripe("Subscripe")
                        setsubscripechanger(true);
                        dispatch(removesubscription(id))
                    }}> {Subscripe}</button> 
                }
             </div>
            <h3 className=" text-2xl font-bold"> Comments: </h3>
             <Comment/>
        </div>
       

    )
}
export default WatchPage