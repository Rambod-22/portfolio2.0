'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'
type Props = {
    experience: Experience
}

function ExperienceCard({experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[400px] md:w-[480px] xl:w-[520px] h-[550px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-20 h-20 rounded-full md:w-24 md:h-24 xl:w-28 xl:h-28 object-cover object-center'
                src={urlFor(experience?.companyImage).url()} alt="" />
        <div className='px-0 md:px-4 text-center'>
            <h4 className='text-2xl md:text-3xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-lg md:text-xl mt-1'>{experience.company}</p>
            <div className='flex justify-center space-x-2 my-2'>
                {experience.technologies.map(technology => (
                    <img key={technology._id} className='h-8 w-8 rounded-full' src={urlFor(technology.image).url()} alt="" />
                ))}
            </div>
            <p className='uppercase py-2 text-gray-300 text-sm'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
            <div className='w-full'>
                <h5 className='text-lg font-semibold mb-3 text-[#F7AB0A]'>Key Responsibilities:</h5>
                <ul className='list-none space-y-3 text-sm md:text-base text-left max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-[#F7AB0A] hover:scrollbar-thumb-[#F7AB0A]/80'>
                    {experience.points.map((point, i) => (
                        <li key={i} className='flex items-start'>
                            <span className='text-[#F7AB0A] mr-3 mt-1 text-lg'>•</span>
                            <span className='flex-1'>{point}</span>
                        </li>
                    ))}       
                </ul>
            </div>
        </div>
        </article>
    )
}

export default ExperienceCard