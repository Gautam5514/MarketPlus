import './App.css' 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/SignUp'
import Login from './components/LogIn'
import LandingPage from './components/LandingPage'
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Offers from './components/offers'

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
      path:'/home',
      element:<Home/>
    },
 
  ])

  return (
    <>
      <div>
      <Offers />
      <NavBar/>
      <RouterProvider router={router}/>
      <ToastContainer />
      </div>
    </>
  )
}

export default App
