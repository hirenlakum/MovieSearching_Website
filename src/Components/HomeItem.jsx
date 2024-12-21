
import { useContext } from "react"
import { Movie } from "../Context/MovieContextStore"

const HomeItem = ({item}) => {

  

  const {seeDetails} = useContext(Movie)

  const see = (id) => {
 seeDetails(id)
  }

  
 
    return(
        <>

  
       
<div
      class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2  max-w-sm rounded-lg font-[sans-serif] overflow-hidden flex flex-wrap  mt-4">
      <div class="min-h-[245px]  w-full ">
        <img src={item.image} class=" h-[245px] w-[400px]    hover:scale-110 transition-all duration-1000 ease-in-out" />
      
      </div>
      <div class="p-6 text-center">
        <h3 class="text-xl font-bold">{item.name}</h3>
      <button type="button"
          class="mt-6 px-5 py-2.5 mx-w-[80px] rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
           onClick={()=>{see(item.id)}}>See Details</button>
      </div>

      
    </div>

   


   
    
   


 
    </>
    )
}

export default HomeItem