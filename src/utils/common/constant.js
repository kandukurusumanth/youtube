
import Search from "./search";


const GOOGLE_API_KEY="AIzaSyAB-vEglLCoyi4vsMuOhVump6CBOhItGps"
const MAX_RESULTS=40;

const Newfun = (ser ="new english trailer")=>{
   
    const YOUTUBE_API=`https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&q=${ser}&part=snippet&type=video&maxResults=${MAX_RESULTS}`
    return YOUTUBE_API
   
    
}


  
export default Newfun