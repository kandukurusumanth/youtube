import { useDispatch, useSelector } from "react-redux"
import { change } from "../utils/common/toogleslice";
import { useState } from "react";
import {buttonsearch} from '../utils/common/buttonlistslice'
import Search from "../utils/common/search";
import Newfun from "../utils/common/constant";
const Header = ()=>{
    const dipacth = useDispatch();
    const count= useSelector((state )=> state.toogle.value)
    const  [search,setsearch] = useState('new english trailer');
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
            <div>
               <input type="text" className="m-2 p-2 rounded-lg bg-red-50" onValue={search} onChange={(e) => setsearch(e.target.value)}/>
                <button className="m-2 p-2 bg-green-300 rounded-xl  " onClick={()=> {
                    
                    dipacth(buttonsearch(search))
                    
                    } } > search</button>
            </div>
            <div> 
                <img className="h-10" alt="account"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3frpE10aJYxmIpD02FmDbmubGHKyM-jmWrg0F8HDsA&s"/>            </div>

        </div>
    )
}
export default Header