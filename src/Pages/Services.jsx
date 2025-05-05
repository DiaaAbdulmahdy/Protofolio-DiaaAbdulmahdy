import React from 'react'
import { Coding_and_Implementation, Debugging_and_Testing, Deployment_and_Maintenance, Project_Analysis,  user_interface_design } from '../assets/Images'


const Services = () => {
    return (
        <div >
            {/* div big */}
            <div className=' container mx-auto text-sm '>
                {/* div one */}
                <div className='container text-center items-center mx-auto m-[100px]'>
                    <h1 className='text-4xl font-serif font-bold'>
                        Services
                    </h1>
                    <div className="bg-pink-700 flex m-auto mb-5 w-[50px] h-[3px] mt-3"></div>


                    <p className='text-neutral-600'>
                    قال رب اشرح لي صدري ويسر لي أمري. 
                    </p>
                </div>

                {/* div two */}
                <div className='text-center items-center  '>

                    <div className=''>

                        <div className='grid grid-cols-1 sm:grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3  gap-10 '>
                        <div className=' px-10  rounded-lg shadow-lg mb-10  h-[320px]    transition-transform duration-300 hover:scale-90'>
                            <img className='w-[50px] h-[50px] ' src={Project_Analysis} alt="" />
                            <h1 className='font-bold text-3xl m-5'>
                                Project Analysis
                            </h1>

                            <p className='text-neutral-500'>
                                Understanding project requirements, goals, and desired features is essential for developing a responsive and <br />
                                professional front-end. This analysis helps ensure theproject's  <br />  success and faster, more efficient execution

                            </p>
                        </div>

                        <div className=' px-10  rounded-lg shadow-lg mb-10 h-[320px]  transition-transform duration-300 hover:scale-90'>
                            <img className='w-[50px] h-[50px]  ' src={user_interface_design} alt="" />
                            <h1 className='font-bold text-3xl m-5'>
                                user interface design

                            </h1>
                            <p className='text-neutral-500'>
                                User Interface (UI) design is a creative aspect of front-end development that involves creating wireframes, mockups,
                                <br /> or illustrations to visualize web page layouts, interactions, and more.

                            </p>
                        </div>

                        <div className=' px-10  rounded-lg shadow-lg mb-10 h-[320px]  transition-transform duration-300 hover:scale-90'>
                            <img className='w-[50px] h-[50px]  ' src={Coding_and_Implementation} alt="" />
                            <h1 className='font-bold text-3xl m-5'>
                                Coding and Implementation

                            </h1>
                            <p className='text-neutral-500'>

                                Front-end development is all about bringing designs and layouts to life by writing code using the aforementioned programming
                                <br /> languages, frameworks, libraries, and tools to create responsive and professionally organized user interfaces.



                            </p>
                        </div>


                        <div >
                        <div className=' px-10  rounded-lg shadow-lg mb-10 h-[320px]  transition-transform duration-300 hover:scale-90'>
                            <img className='w-[50px] h-[50px]  ' src={Debugging_and_Testing} alt="" />
                            <h1 className='font-bold text-2xl m-5'>
                                Debugging and Testing

                            </h1>
                            <p className='text-neutral-500'>

                                Ensuring that web pages are error-free, compatible with other web browsers, and perform optimally is a huge responsibility.
                                Front-end developers use a variety of debugging tools and testing methods to achieve this.


                            </p>
                        </div>

                      

                    </div>


                    <div className=' px-10  rounded-lg shadow-lg mb-10 h-[320px]  transition-transform duration-300 hover:scale-90'>
                            <img className='w-[50px] h-[50px]  ' src={Deployment_and_Maintenance} alt="" />
                            <h1 className='font-bold text-3xl m-5'>
                                Deployment and Maintenance

                            </h1>
                            <p className='text-neutral-500'>

                            Publishing web pages to servers or hosting platforms is the final step before users can access them. Web page maintenance 
                            involves continuous improvement by adding new features, fixing issues, and improving performance and security.




                            </p>
                        </div>
                        </div>

                    </div>



                </div>

           

            </div>





        </div>
    )
}

export default Services