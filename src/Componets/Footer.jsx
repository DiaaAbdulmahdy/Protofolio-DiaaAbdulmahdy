import React, { useRef } from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import emailjs from '@emailjs/browser';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';






const Footer = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ufymweo', 'template_e3x6drv', form.current, {
        publicKey: 'N00Z3EycWxNWBmcgu',
      })
      .then((result) => {
        console.log(result.text);
      },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset()
  };





  return (

    <section className=''>
      <div className=' '>
        {/* div One */}
        <div className='container  text-center items-center mx-auto m-[50px]   '>
          <h1 className='text-4xl font-serif font-bold'>
            Contact
          </h1>
          <div className="bg-pink-700 flex m-auto mb-5 w-[50px] h-[3px] mt-3"></div>


          <p className='text-neutral-600'>
            قال رب اشرح لي صدري ويسر لي أمري.
          </p>
        </div>


        {/* div two */}

        <div className='mdl:h-[240px] sm:h-[350px] lgl:h-[150px] container mx-auto '>



          <div className=' grid grid-cols-1  mdl:grid-cols-2 lgl:grid-cols-3 shadow-md    '>




            <div className='  flex justify-center text-center items-center  container mx-auto ' >
              <TfiLocationPin className='font-bold text-6xl border-2 border-blue-600 px-3 rounded-full text-blue-600  hover:bg-blue-600 hover:text-white duration-700  ' />
              <div className='p-5 '>
                <h3 className='text-2xl font-bold font-serif'>Address</h3>
                <p className='text-neutral-600 font-serif'>Giza Governorate, Egypt </p>
              </div>
            </div>


            <div className='flex justify-center text-center items-center  container mx-auto'>
              <FiPhone className='font-bold text-6xl border-2 border-blue-600 px-3 rounded-full text-blue-600  hover:bg-blue-600 hover:text-white duration-700' />
              <div className='p-5 '>
                <h3 className='text-2xl font-bold font-serif'>Call Us
                </h3>
                <p className='text-neutral-600 font-bold'>+201055030994</p>
              </div>
            </div>


            <div className='flex justify-center text-center items-center   container mx-auto  '>
              <TfiEmail className='font-bold text-6xl border-2  border-blue-600 px-3  rounded-full text-blue-600  hover:bg-blue-600 hover:text-white duration-700' />
              <div className='p-5 '>
                <h3 className='text-2xl font-bold font-serif  '>Email Us </h3>
                <p className='text-neutral-600 font-serif  '>diaaabdulmahdy@gmail.com</p>

              </div>
            </div>



          </div>



        </div>


        <div className='   '>


          <div className='grid grid-cols-1  sm:flex justify-center '>
            <form ref={form} onSubmit={sendEmail} className='p-1    '>
              <div className='py-5 lgl:flex gap-5 sm:grid grid mdl:grid-cols-2 '>
                <input name='yourName' className=' h-[5vh]  rounded-lg  sm:w-[320px] lgl:w-[320px] border-2 border-blue-600  p-5 text-2xl font-bold' type="text" placeholder='Your Name' />

                <input name='Email' className='  h-[5vh]  sm:w-[320px] lgl:w-[400px] rounded-lg border-2 border-blue-600 p-5 text-2xl font-bold' type="email" placeholder='Your Email' />
              </div>
              <textarea name="Message" id="" className='lgl:w-[100vh] mdl:w-full justify-center h-[30vh] mt-5 border-2 border-blue-600 text-2xl font-bold p-5 ' placeholder='Message'></textarea>
              <div className='py-5 text-center items-center flex justify-center'>
                <input className='bg-blue-600 rounded-full px-10 py-2 m-5 lgl:flex justify-center   hover:bg-blue-400 text-white hover:text-black' type="submit" value={'I Send a Message'} />
              </div>
            </form>
          </div>


        </div>


        <div className='bg-black w-full text-white text-center py-10'>



          <div className='py-10'>
            <p className='font-serif font-bold text-lg  '>&copy; 2025 All Right Reserved made by Diaa Abdulmahdy  </p>
            <div className='flex justify-center gap-5 py-5 text-2xl '>
              <a className='text-[#0866FF] hover:bg-white hover:rounded-full duration-500' href="https://www.facebook.com/share/1ADN4A6yyp/" target='_blank'><FaFacebook /></a>
              <a className='text-[#25D366] hover:bg-white hover:rounded-full duration-500' href="https://wa.link/epnvj4" target='_blank'><FaWhatsapp /></a>
              <a className='text-[#0073B2] hover:bg-white duration-500' href="https://www.linkedin.com/in/diaa-abdulmahdy19/" target='_blank'> <FaLinkedin /> </a>
              <a className='text-[#ffff] hover:bg-[#0D1117] hover:rounded-full duration-500' href="https://github.com/DiaaAbdulmahdy" target='_blank'><FaGithub />                        </a>
              <a className='text-[#27A7E7] hover:bg-white hover:rounded-full duration-500' href="https://t.me/diaaabdulmahdy19" target='_blank'><FaTelegram /></a>


            </div>


          </div>



        </div>


      </div>
    </section>



  )
}

export default Footer