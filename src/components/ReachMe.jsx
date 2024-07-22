import React from 'react'
import { motion } from "framer-motion"




function ReachMe() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d087a2fe-a956-4f94-b527-8d194b8f0381");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);

          event.target.reset();

          alert("Message sent successfully!")

        }

    }

    return (
        <>

            <div className='border-b border-neutral-800 pb-12 w-full'>

                <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1}}
                className='my-20 text-center text-4xl'>Reach Me</motion.h2>

                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='mx-auto w-full max-w-5xl'>
                    <div className='flex flex-col flex-wrap lg:justify-center mb-10 w-full'>
                        {/* Form */}
                        <div className=''>
                            <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-6 rounded-lg'>
                                <h3 className='text-4xl '>Let's Work Together</h3>
                                <p className='text-white/60'>I am interested to hear from you. Let's discuss about our future works or valuable ideas here.</p>
                                {/* Input */}

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-white'>
                                    <input type="firstname" placeholder='First Name *' name='firstName' required className='rounded p-2 bg-transparent outline-none border border-violet-800' />
                                    <input type="lastname" placeholder='Last Name *' name='lastName' required className='rounded p-2 bg-transparent outline-none border border-violet-800' />
                                    <input type="email" placeholder='Email Address *' name='email' required className='rounded p-2 bg-transparent outline-none border border-violet-800' />
                                    <input type="phone" placeholder='Phone Number *' name='phone' required className='rounded p-2 bg-transparent outline-none border border-violet-800' />

                                </div>

                                {/* Text Area */}

                                <textarea name='Message' rows={4} placeholder="Type your message here." id="" className='bg-transparent border-2 border-violet-800 rounded p-2 outline-none text-white'></textarea>

                                <button type='submit' className='max-w-40 bg-violet-800 p-2 rounded-full hover:bg-violet-600'>Send Message</button>

                            </form>
                        </div>
                       
                    </div>
                </motion.div>

            </div>

        </>
    )
}

export default ReachMe