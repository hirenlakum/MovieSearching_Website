import { useNavigate } from "react-router-dom"

const MovieNotFound = () => {

    const navigate = useNavigate()

    const  gotohome = () => {
        navigate("/")
    }
    return(
        <>
        <div className="text-center mt-4 mb-5">

        
        <p class="text-xl text-red-500 font-bold">Movie Not Found</p>
        <p class="mt-2 text-gray-700">Sorry, we couldn't find the movie you searched for.</p>
        <button id="go-home-button" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        
        onClick={gotohome}>
            Go to Home
        </button>
        </div>
        </>
   
    )
}

export default MovieNotFound