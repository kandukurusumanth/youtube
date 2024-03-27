
import Search from "./search";


const GOOGLE_API_KEY="AIzaSyBofr6GuVY65qdy5TAbucz1FONzoK9Vnjw"
const MAX_RESULTS=40;

const Newfun = (ser ="new english trailer")=>{
    console.log(ser, 'from the new fun');
    const YOUTUBE_API=`https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&q=${ser}&part=snippet&type=video&maxResults=${MAX_RESULTS}`
    return YOUTUBE_API
   
    
}


  
export default Newfun