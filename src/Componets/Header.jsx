import React, { useEffect, useState } from 'react'
import { Link, NavLink,  } from 'react-router-dom'
import { logo } from '../assets/Images'



const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
];

// import { FaBars } from "react-icons/fa";

// import { IoIosClose } from "react-icons/io";


import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";




const Header = () => {


// const [openBar, setopenBar] = useState(false)

const [openBar, setOpenBar] = useState(false);
  


  return (


    <div className=' bg-[#000000] text-white font-serif '>

{/*  div bag */}
<div className='container mx-auto flex justify-between text-center items-center '>


{/* Logo */}
  <div className='w-[200px]'>
      <Link to={'/'}>
      <img className=' mdl:flex ' src={logo} alt="" />
      </Link>


  </div>





{/*  NavBar div */}
<div className='hidden mdl:p-10 mdl:flex '>
<nav>
        <NavLink className={'flex gap-8 '}>
          
        <Link className='hover:bg-pink-800	 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/'}>
            Home
        </Link>
        <Link className='hover:bg-pink-800	 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/About'}>
            About
        </Link>

        <Link className='hover:bg-pink-800	 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/Services'}>
        Services
        </Link>

        <Link className='hover:bg-pink-800	 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/Projects'}>
        Projects
        </Link>

       

        <Link className='hover:bg-pink-800	 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/Contact'}>
        Contact
        </Link>



        </NavLink>
      </nav>
</div>








                

                {/* Mobile Menu Icon */}
                <div
                    className=" mdl:hidden text-white mr-7"
                    onClick={() => setOpenBar(!openBar)}
                >
                    {!openBar ? (
                        <FaBars fontSize="20px" />
                    ) : (
                        <IoMdClose fontSize="20px" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 bg-white w-[200px] h-full transform ${openBar ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-700 ease-in-out`}
            >
                {/* Close Icon */}
                <div
                    className="absolute top-4 left-2 text-black cursor-pointer"
                    onClick={() => setOpenBar(false)}
                >
                    <IoMdClose fontSize="24px" />
                </div>
                

                
             <div className='text-black  '>
             <NavLink className={'px-2 py-[100px]  grid grid-rows-1 gap-10  transition duration-500 rounded  '}>
          
          <Link className='hover:bg-pink-800 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/'}>
              Home
          </Link>
          <Link className='hover:bg-pink-800 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/About'}>
              About
          </Link>
  
          <Link className='hover:bg-pink-800 duration-700 rounded-full p-[10px] font-bold text-lg'  to={'/Services'}>
          Services
          </Link>
  
          <Link  className='hover:bg-pink-800 duration-700 rounded-full p-[10px] font-bold text-lg' to={'/Projects'}>
          Projects
          </Link>
  
       
  
          <Link className='hover:bg-pink-800 duration-700 rounded-full p-[10px] font-bold text-lg'  to={'/Contact'}>
          Contact
          </Link>
  
  
  
          </NavLink>
             </div>
               
            </div>



</div>





  )
}

export default Header