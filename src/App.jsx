
import {Outlet} from "react-router-dom"
import Footer from "./Components/Footer.jsx"
import MovieProvider from "./Context/MovieContextStore.jsx"

const App = () => {



  return(
    <div>
      <MovieProvider>
    <h1 className="h-[80px] text-blue-600 text-[2vmax]  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] flex items-center justify-center ">Movie Searching Application</h1>
      <Outlet/>
      <Footer/>
      </MovieProvider>

    
    </div>
  
  )
}

export default App
