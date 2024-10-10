import './App.css' 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/SignUp'
import Login from './components/LogIn'
import LandingPage from './components/LandingPage'
import { ToastContainer } from 'react-toastify';
import ProtectRoute from './components/protectRoute'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <LandingPage />
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/',
      element:<ProtectRoute/>,
      children:[
        {
          path:'/home',
          element:<Home/>
        }
      ]
    },
 
  ])

  return (
    <>
      <div>

      <RouterProvider router={router}/>
      
      <ToastContainer />
      </div>
    </>
  )
}

export default App
