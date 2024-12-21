import { useContext } from "react"
import { Movie } from "../Context/MovieContextStore"
import { useNavigate } from "react-router-dom"


const Detail = () => {

  const {detail} = useContext(Movie)
  const {data} = useContext(Movie)

  const DataFilter = data.filter(item=>{
    const NewData = detail.indexOf(item.id)
    return NewData>=0
  })
  const navigate = useNavigate()
 const gotohome = () => {
  navigate("/")
 }
  
    return(
     
      <div
      class="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 mb-5">
      <div class="min-h-[280px] h-full">
        <img src={DataFilter[0].image} class="w-full h-full " />
      </div>

      <div class="p-6">
        <h3 class="text-xl font-semibold">Movie Name:{DataFilter[0].name}</h3><br />
        <h3 class="text-xl font-semibold">Cast:
          
         {DataFilter[0].cast.join(" ")}
          
          </h3><br />
        <p class="mt-3 text-sm text-gray-500 leading-relaxed">{DataFilter[0].description}
          arcu.
        </p>
        <h3 className="mt-5">Rating:{DataFilter[0].rating}</h3><br />
   <h2 className="mt-5">Where Shoot:{DataFilter[0].location}</h2>
   <button id="go-home-button" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={gotohome}
        >
            Go to Home
        </button>
      </div>
      
    </div>
    )
}

export default Detail