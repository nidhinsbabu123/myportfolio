import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"
import { FiDownload } from "react-icons/fi";

function About() {
    return (
        <>

            <div>

                <div className="border-b border-neutral-800 pb-16 ">
                    <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>

                    <div className="flex flex-wrap">
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 0.5}}
                        className="w-full lg:w-1/2 lg:p-8">

                            <div className="flex items-center justify-center">

                                <img src="./images/Pro.jpg" alt="No Img" className='w-64 h-72 rounded-lg object-contain border-2 p-2 border-violet-800' />

                            </div>

                        </motion.div>

                        <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}} 
                        transition={{duration: 0.5}}
                        className="w-full lg:w-1/2">

                            <div className="flex justify-center lg:justify-start">
                                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                            </div>

                            <div className='lg:mt-16 text-center'>

                            <a className='outline outline-violet-700 px-4 py-2 rounded-md hover:bg-violet-700 hover:font-bold flex items-center justify-center gap-2' href="./images/Nidhin S Babu.pdf" download="./images/Nidhin S Babu.pdf">Download Resume <FiDownload /></a>

                            </div>

                            

                        </motion.div>

                    </div>

                    

                </div>

            </div>

        </>
    )
}

export default About