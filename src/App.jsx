
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import { Toaster } from 'sonner'







function App() {
 

  



  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter/>
      <Toaster/>
    </>
  )
}

export default App
