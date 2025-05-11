import React from 'react'
import "./App.css"
import {Button} from "./components/ui/button"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'

import Landing from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'
import UrlProvider from './context'
import RequireAuth from './components/require-auth'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element:<Landing/>
      },
      {
        path:'/dashboard',
        element:<RequireAuth>
                  <Dashboard/>
                </RequireAuth> 
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<RequireAuth>
                  <Link/>
                </RequireAuth>
      },
      {
        path:'/:id',
        element:<RedirectLink/>
      }
    ]
  }
])

const App = () => {
  return (
    <UrlProvider>
      <RouterProvider router = {router}/>
    </UrlProvider>
    // <div className=' text-2xl'>
    //   <Button>Click mee</Button>
    // </div>
  )
}

export default App