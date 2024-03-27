const Shimmerdiv= ()=>{
    return (
        <div className="w-40 h-40 p-2 m-2 bg-gray-400">

        </div>
    )
}
const Shimmer = ()=>{
    const arr = Array(30).fill("");
    return (
        <div className="flex flex-wrap">
            {
                arr.map((obj,ind)=>{
                    return <Shimmerdiv key={ind}/>
                })
            }
        </div>
    )
}
export default Shimmer