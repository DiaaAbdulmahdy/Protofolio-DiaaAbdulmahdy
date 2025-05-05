import React, { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Componets/Header'
import Footer from './Componets/Footer'

import { FadeLoader } from 'react-spinners'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

 







const Layout = () => {


  const [loading, setloading] = useState(false)

  useEffect(() => {
      setloading(true)
      setTimeout(() => {
        setloading(false)
        
      }, 3000);
  }, [])




   return(
  <>


{loading ?
 <div className='absolute top-[300px] bottom-0 right-0 left-0'>


<FadeLoader className='m-auto h-[100vh] flex justify-center text-center items-center text-6xl '
  color="#ff0000"
  height={20}
  loading
  margin={10}
  radius={2}
  speedMultiplier={1}
  width={7}
/>

</div> :
 <>
      <Header/>
      <Outlet/>
      <Footer/>
     
</> }

 </>

      
     

      
  
   ) 
}


const App = () => {



  


  const router = createBrowserRouter(createRoutesFromElements(
    <Route>

    <Route path='/' element={<Layout/>}>

    <Route index element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
    <Route path='/Projects' element={<Projects/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>

    </Route>

    Contact
    </Route>
  ))

 
  return (


    <div>
    
 
 
     <RouterProvider router={router}/>
    </div>
   
  )
  
  }
  







export default App