import './App.css' 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/SignUp'
import Login from './components/LogIn'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
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
      <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
