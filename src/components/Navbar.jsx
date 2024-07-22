import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";


function Navbar() {
  return (
    <>
        
        <div>
            <nav className='mb-20 flex items-center justify-between py-6'>

                <div className='flex flex-shrink-0 items-center'>

                    <img className='w-20 mx-2' src="./images/CODE.png" alt="Logo Img" />

                </div>

                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a className='hover:text-sky-500' href="https://www.linkedin.com/in/nidhin-s-babu-968b3121b/" target='blank'> <FaLinkedin /> </a> 
                    <a className='hover:text-violet-700' href="https://github.com/nidhinsbabu123" target='blank'><FaGithub /></a>
                </div>

            </nav>
        </div>

    </>
  )
}

export default Navbar