import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addsubscription, removesubscription } from "../utils/common/subscriptionslice";
import Comment  from "./Commet";
import Chat from "./Livechat";
import { add } from "../utils/common/liveslice";
import { generate } from "../utils/common/helper";
const WatchPage =()=>{
    const dispatch = useDispatch();
    const selector = useSelector(state => state.livechat.items)
    let {id} = useParams()
    let [ser,setser] = useState('')
    let [Subscripe,setsubscripe] = useState('Subscripe')
    let [Subscripechager,setsubscripechanger] = useState(true)
    let [livechat,setlivechat] = useState([])
    useEffect(()=>{
        let timer= setInterval(() => {
            
            setlivechat(selector)
        }, 300);
        return ()=>{
            clearInterval(timer)
        }
       
    },[selector])
    return (
        <>
            <div className=" flex m-10 w-full h-[500px]">
                <div className=" w-2/3 h-full">
                    <iframe className="rounded-xl w-full h-full"  src={"https://www.youtube.com/embed/" + id} allowFullScreen></iframe>
                </div>
                <div className=" w-1/3 h-full overflow-scroll">
                    <ul className="m-2 p-2 ">
                        
                        {
                            
                            livechat.map((ele,ind)=>{
                                
                                return <Chat data={ele} key={ind}/>
                            })
                        }
                    </ul>

                </div>
               
                
            </div>
            <div className="flex justify-between m-5 p-2">
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
                <div className="p-2 m-2 ">
                    <input type="text"  className="p-2 m-2 bg-gray-100" 
                        onChange={e => { setser(e.target.value)}}
                        value={ser}
                    /> 
                    <button className="p-2 m-2 bg-green-300 rounded-md" onClick={()=>{
                        dispatch(add({
                            name:generate(),
                            message:ser
                        }))
                        setser("")
                        
                        
                        
                    }}
                    > send </button>
                </div>
            </div>
            <h3 className=" text-2xl font-bold"> Comments: </h3>
            <Comment/>
        </>
       

    )
}
export default WatchPage