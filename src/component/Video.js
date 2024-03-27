import { useEffect, useState } from "react"

import searchhelper  from "../utils/common/constant"
import { Link } from "react-router-dom"
import Newfun, {YOUTUBE_API} from "../utils/common/constant"
import Shimmer from "./shiimer"
import { useSelector } from "react-redux"
const  Videocontainer = ({snippet, id})=>{
    const {videoId} = id
    const {thumbnails, title,channelTitle} = snippet

    return (
       <Link to={"/watch/"+videoId}>
            <div className="p-2 m-2 shadow-2xl">
            
            
                <img className="h-40"src={thumbnails.high.url}/>
                {/* <h1>{title}</h1> */}
                <h4>{channelTitle}</h4>
            </div>
       </Link>
    )
}
const Video = ()=>{
    const [videos , setvideos] = useState([])
    const rec = useSelector(state => state.recommodations.value)
    useEffect(()=>{
        getvideos();

    },[rec])
    async function getvideos(){
        const data = await fetch(Newfun(rec))
        const jsondata = await data.json();
        console.log(jsondata);
        setvideos(jsondata.items)
    }
    
    return videos.length===0 ? <Shimmer />: (
        <>
            <div className="flex flex-wrap">

                {videos.map((data,ind)=>{
                   
                    return <Videocontainer key={data.id.videoId} {...data} />
                })}
                
            </div>
        
        </>
       

    )
}
export  default Video