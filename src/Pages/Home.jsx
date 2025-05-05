import React from 'react'
import { DiaaAbdulmahdy } from '../assets/Images'
import About from './About'
import Services from './Services'
import Projects from './Projects'




const Home = () => {
  return (
    <div >



      {/* Div big */}
     <div className='bg-black text-white' >

        <div   className='container mx-auto mb-[50px] max-w-[800px]    '  >
          <img  className=' sm:container mx-auto m-auto rounded-full '  src={DiaaAbdulmahdy} alt="" />
          <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10">
                <div className="bg-pink-700 w-[400px] h-[2px] mt-10 sm:w-[200px] lg:w-[400px]"></div>
            </div>
        </div>


      {/* div textOne */}
       <div className='container mx-auto m-auto flex justify-center font-serif pb-[50px] text-6xl mdl:text-4xl sm:text-xl '>
       <h1  >
       

            Welcome I'am Diaa Abdulmahdy 
            <br />
            <span className='flex justify-center '>
             Front-end Freelancer
          </span>
         
          </h1>
         
          
       </div>
       
     </div>

<About/>
<Services/>
<Projects/>

    </div>
  )
}

export default Home

