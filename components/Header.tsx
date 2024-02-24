'use client'
import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '@/typings'

type Props = {
  socials: Social[]
}

function Header({socials}: Props) {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      
        <motion.div initial={{x: -500, opacity: 0, scale: 0.5,}} animate={{x:0, opacity: 1, scale: 1,}} transition={{duration: 1.5,}} className='flex flex-row items-center'>
            {/*Social Icons*/ }
            {socials.map((social) => (
                          <SocialIcon key={social._id}  url={social.url} fgColor="gray" bgColor="transparent" />)

            )}
        </motion.div>
        
        <motion.div initial={{x: 500, opacity: 0, scale: 0.5}} animate={{x:0, opacity: 1, scale: 1,}} transition={{duration: 1.5}} >
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url='#contact'
            />
            <p className='uppercase hidden md:inline-flex text-sm  text-gray-400'><Link href="#contact">GET IN TOUCH</Link></p>
        </motion.div>
       
    </header>
  )
}

export default Header