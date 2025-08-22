import './App.css' 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/SignUp'
import Login from './components/LogIn'
import LandingPage from './components/LandingPage'
import { ToastContainer } from 'react-toastify';
import ProtectRoute from './components/protectRoute'
import PrivacyPolicy  from './components/PrivacyPolicy'
import TermCondition from './components/TermCondition'
import ReturnPolicy from './components/ReturnPolicy'
import ContactUs from './components/ContactUs'
import { CartProvider } from './contexts/CartContext'

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
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy/>,
    },
    {
      path: '/term-condition',
      element: <TermCondition/>
    },
    {
      path: '/return-policy',
      element: <ReturnPolicy />
    },
    {
      path: '/contact-us',
      element: <ContactUs/>
    }

  ])

  return (
    <>
      <CartProvider>
        <div>

        <RouterProvider router={router}/>
        
        <ToastContainer />
        </div>
      </CartProvider>
    </>
  )
}

export default App
