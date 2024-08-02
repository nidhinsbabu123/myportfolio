import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  return (
    <>

      <div className='border-b border-neutral-800 pb-20'>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-10 text-center text-4xl'>Get in Touch</motion.h2>

        <div className='text-center tracking-tight'>
        
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            // my-4 flex items-center justify-center gap-1
            className='hidden'><MdLocationPin />{CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='my-4 flex items-center justify-center gap-1'><FaPhone />{CONTACT.phoneNo}
          </motion.p>
          <a href="mailto:nidhinsbabu456@gmail.com" className='border-b flex items-center justify-center gap-2 w-fit mx-auto hover:font-bold'><FaEnvelope />{CONTACT.email}</a>

        </div>

      </div>

    </>
  )
}

export default Contact