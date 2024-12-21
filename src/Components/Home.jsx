import { useContext, useEffect, useState } from "react"
import { Movie } from "../Context/MovieContextStore"
import HomeItem from "./HomeItem"
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const {data} = useContext(Movie)

    const [arrow,setarrow] = useState(false)

    const [show,setShow] = useState(false)

    const [search,setSearch] = useState([])

    const [value,setValue] = useState("")

    const [found,setfound] = useState(false)

    const navigate = useNavigate()

    const searchHandle = () => {
        
        const NewMovie = data.filter(item=>{
            const SearchMovie = item.name.toLowerCase().startsWith(value.toLowerCase())
            return SearchMovie
        })
        setSearch(NewMovie)
        setShow(true)
        setarrow(true)
        setfound(true)
    }

    useEffect(()=>{

        if(found===true){
            if(search.length===0){
     navigate("/movienotfound")
            }
        }
       
    },[search])

    const backtohome = () => {
        setShow(false)
    }
   
    
    return(
<>
        <div class="flex items-center gap-4 px-4 py-3 rounded-md border-2 mt-[30px] border-blue-500 overflow-hidden max-w-[900px] mx-auto font-[sans-serif]">
        {arrow && <TiArrowBack onClick={backtohome}  /> } 
         <input type="email" placeholder="Search Something..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm" onChange={(e)=>setValue(e.target.value)} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600"
        
        onClick={searchHandle} >
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        
      </div>

      
        
        <div className="flex flex-wrap gap-2 mx-w-[900px]  mx-auto mt-6 p-2 justify-center ">


            {show ?
           
           search.map((item)=>
            <HomeItem item={item} key={item.id}/>
        )
            :

            data.map((item)=>
                <HomeItem item={item} key={item.id}/>
            )
        }
            

        </div>  
</>
    )
}

export default Home

