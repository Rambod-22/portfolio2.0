'use client'
import { Experience } from '@/typings';
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {
    experiences: Experience[];
}

function WorkExperience({ experiences}: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const scrollDistance = window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 400 : 500;
            scrollRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const scrollDistance = window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 400 : 500;
            scrollRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
    };

    return (
        <motion.div 
        initial={{opacity: 0}} 
        whileInView={{opacity: 1}}
         transition={{duration:1.5}} 
          className='h-screen pt-32 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            
            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className='absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-[#F7AB0A]/80 hover:bg-[#F7AB0A] p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-colors duration-200 touch-manipulation'
            >
                <svg className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className='absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-[#F7AB0A]/80 hover:bg-[#F7AB0A] p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-colors duration-200 touch-manipulation'
            >
                <svg className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
            </button>

            <div ref={scrollRef} className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {experiences?.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience}></ExperienceCard>
                )
                )}
            </div>
            
        </motion.div>
    )
}

export default WorkExperience