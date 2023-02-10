'use client'

import React from 'react'
import {motion} from 'framer-motion'
import {Experience} from '../../models/experience'

type Props = {
    experience: Experience
};

export default function ExperienceCard({experience}: Props) {
    return (
        <article key={experience.id} className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img src={experience.company_logo}
                        alt=''
                        className='w-32 h-32 rounded-full xl:w-[200px]
        xl:h-[200px] object-cover object-center'
                        transition={{duration: 400}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experience.job_title}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.company_name}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.skills.map((skill) => (
                        <img src={skill.image}
                             key={skill.id}
                             className='hover:scale-110'
                             width={35}
                             height={35}
                             alt={skill.title} />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.date_started).toDateString()} -{' '}
                    {experience.date_ended ?
                        new Date(experience.date_ended).toDateString() : 'Present'
                    }
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {/*{experience.points.map((point, i) =>(*/}
                    {/*    <li key={i}>{point}</li>*/}
                    {/*))}*/}

                </ul>
            </div>
        </article>
    )
}