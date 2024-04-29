import { useDispatch, useSelector } from "react-redux"
import { change } from "../utils/common/toogleslice";
import { useEffect, useState } from "react";
import {buttonsearch} from '../utils/common/buttonlistslice'
import Search from "../utils/common/search";
import Newfun from "../utils/common/constant";
import Suggestion from "./Suggestion";
import { addsug } from "../utils/common/Suggestion-cache";
import { generate } from "../utils/common/helper";
const Header = ()=>{
    const dipacth = useDispatch();
    const selector = useSelector((state) => state.sug_cache.obj)
    const count= useSelector((state )=> state.toogle.value)
    const  [search,setsearch] = useState('new english trailer');
    const  [sug,setsug] = useState([])
    const   [show,setshow] = useState(false)
    const [dive,setdive] = useState(false)
    const helper = (e)=>{
        
        setsearch(e.target.value)

        
        
    }
    useEffect(()=>{
        let timer ;
        if(search in selector){
            let cache = selector[search];
            setsug(cache)
        }
        else {
            timer=setTimeout(() => {
            suggestion();
        }, 200);
        }
        return ()=>{
            clearInterval(timer)
        }
    },[search])
    async function suggestion(){
            
            
            
        const sugg = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+search);
        const json = await sugg.json();
        console.log(json[1]);
        dipacth(addsug({[search]:json[1]}))
    
        setsug(json[1]);
    }
    return (
        <div className="flex justify-evenly m-2 p-2 cursor-auto">
            <div >
                <button onClick={()=>{
                   
                    dipacth(change(count))
                    
                }}> <img className="h-10" alt="hangburger_menu"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"/></button>
            </div>
            <div>
                <img className="h-10" alt="youtube_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"/>
            </div>
            <div className="flex ">
                <div>
                    <input type="text" className="m-2 p-2 rounded-lg bg-red-50"  onChange={(e) => helper(e) }
                        onFocus={()=>{
                            setshow(true)
                        }}
                        onBlur={()=>{
                            setshow(false)
                        }}
                        
                     />
                     {show && <div className=" w-96 h-30  bg-gray-50 shadow-xl rounded-md fixed" onClick={()=>{
                        console.log('data');
                     }}
                    
                     >
                        <ul >
                           
                            
                            {
                            
                                sug.map((element,ind)=>{
                                    
                                    return <Suggestion key={ind} data={element} /> 
                                })}
                        </ul>
                        
                     </div>
                     }
                </div>
                <div>
                    <button className="m-2 p-2 bg-green-300 rounded-xl  " onClick={()=> {
                        
                        dipacth(buttonsearch(search))
                        
                    } } > search</button>
                </div>
            </div>
            <div> 
                <img className="h-10" alt="account"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3frpE10aJYxmIpD02FmDbmubGHKyM-jmWrg0F8HDsA&s"/>          
             </div>
            

        </div>
    )
}
export default Header