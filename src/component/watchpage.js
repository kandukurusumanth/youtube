import { useState } from "react"
import { useParams } from "react-router-dom"


const WatchPage =()=>{
    let {id} = useParams()
    console.log(id);
    let [Subscripe,setsubscripe] = useState('Subscripe')
    let [Subscripechager,setsubscripechanger] = useState(true)
    console.log(Subscripe);
    return (
        <div className="m-10 w-[700px] h-[600px]">
             <iframe className="rounded-xl w-full h-3/4"  src={"https://www.youtube.com/embed/" + id} frameborder="0" allowfullscreen></iframe>
             <div className="flex justify-between m-5">
                <h1 className="font-bold text-xl p-2 m-2">Take u Forward </h1>
                {
                Subscripechager ? <button className="p-2 m-2 bg-green-300  rounded-lg" onClick={()=>{
                        setsubscripe("Subscriped");
                        setsubscripechanger(false)
                    }}> {Subscripe}</button> : <button className="p-2 m-2 bg-green-300  rounded-lg" onClick={()=>{
                        setsubscripe("Subscripe")
                        setsubscripechanger(true)
                    }}> {Subscripe}</button> 
                }
             </div>
        </div>
       

    )
}
export default WatchPage