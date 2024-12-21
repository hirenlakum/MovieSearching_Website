import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./Components/Home.jsx"
import Detail from './Components/Details.jsx'
import MovieNotFound from './Components/MovieNotFound.jsx'


const router=createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[
      {
      path:"/",element:<Home/>
    },
    {
      path:"/detail",element:<Detail/>
    },
    {
      path:"/movienotfound",element:<MovieNotFound/>
    },

    
  ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
