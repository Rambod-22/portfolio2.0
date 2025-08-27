'use client'
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
type Props = {
    projects: Project[];
}

function Projects({ projects}: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.5}}  className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            
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

            <div ref={scrollRef} className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pb-10'>
                {projects.map((project, i) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img className='h-96' initial={{y:-300, opacity: 0}} transition={{duration: 1.2}} whileInView={{opacity: 1, y:0}} viewport={{once:true}} src={urlFor(project?.image).url()} alt="" />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>{" "}{project.title}</h4>
                            <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map(technology => (
                                <img className='w-10 h-10 rounded-full' key={technology._id} src={urlFor(technology.image).url()} alt="" />
                            ))}
                            </div>
                            <p className='text-lg text-center md:text-center'>{project?.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects