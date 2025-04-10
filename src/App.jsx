import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import ViewPaste from './components/ViewPaste'
import Paste from './components/Paste.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/pastes',
      element:
      <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <Paste/>
      </div>
    },{
      path:'/pastes/:id',
      element:
      <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <ViewPaste/>
      </div>
    }

  ]
)

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
