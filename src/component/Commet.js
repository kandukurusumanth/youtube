let commetdata = [{name:"sumanth" , text:"hi", replies:[{name:"sumanth", text:"ok", replies:[{name:"muni" , text:"agian" , replies:[]}]},{name:"rajini" , text:"long time no see", replies:[]},{name:"vijay", text:"feeling shy rey", replies:[]}]} , {name:"muni" , text:"ok hi" , replies:[]} , {name:"vijay" , text:"why are talking", replies:[]}]
const Commetui= ({data})=>{
   
    let {name, text} = data
   
    return (
        <>
            
           <div className="flex m-2 p-2 bg-gray-100 ">
                <div className="m-2 p-2">
                        <img className="w-[20px] h-[20px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3frpE10aJYxmIpD02FmDbmubGHKyM-jmWrg0F8HDsA&s" />
                    
                </div>
                <div >
                        <h2>usename:{name}</h2>
                        <h2>comment:{text}</h2>
                </div>
           </div>
          
           
           
        </>
    )

}
const Combination = ({elementdata})=>{
    return (
       <>
            <Commetui data={elementdata} />
            <Comment passed={elementdata.replies}/>
           
       </>
    )
}
const Comment = ({passed=commetdata})=>{
    return(
        <div className="m-5 p-2 ">
            {passed.map((element, ind)=>{
                return <Combination key={ind} elementdata={element}/>

            })}

        </div>
    )
}
export default Comment