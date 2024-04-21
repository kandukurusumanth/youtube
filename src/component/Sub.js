import { useSelector } from "react-redux"
const Subscripted = ({name})=>{
    
    return (
        <div>
            <h1> this is id of subscriped_channel : {name}</h1>
        </div>  
    )
}
const Sub= ()=>{
    const subscriped_channel = useSelector(state => state.subscription.items);
    return (
            <div>
                {
                    subscriped_channel.map((obj,ind)=>{
                        return <Subscripted key={ind} name={obj}/>
                    })
                }

            </div>
    )
} 
export default Sub