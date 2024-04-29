import { generate } from "../utils/common/helper"

const Chat  = ({data})=>{
    let {name,message}= data;
    return (
        <>
            <div className="flex">
                <img className="h-10 m-1 p-2" alt="account"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3frpE10aJYxmIpD02FmDbmubGHKyM-jmWrg0F8HDsA&s"/> 
                <span className="m-1 p-2">{name}</span>         
                <li className="m-1 p-2 font-bold">{message}</li>
            </div>
            
        </>
    )
}
export default Chat