import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Ck = ()=>{
    const sub= useSelector(state => state.subscription.items)
    
    useEffect(()=>{
        
    },[sub])
    return (
        <>
            <div className="col-span-2 p-2 m-2 ">
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/sub"> <h1>sub</h1></Link>
                <Link to="/lib"><h3>lib</h3></Link>
                <Link to="/short"><h3>short</h3></Link>

            </div>
        </>
    )
}
const Sidebar= ()=>{
    const toggler = useSelector((state) => state.toogle.value)
    
    return (
            toggler ? <Ck/> : null
    )
}
export default Sidebar