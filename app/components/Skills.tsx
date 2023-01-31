'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../../models/skill';

type Props = {
    skills: SkillType[]
}

export default function Skills({ skills }: Props) {
    return (
        <motion.div className="h-screen relative flex  flex-col text-center 
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className="section-title">
                Skills
            </h3>

            <h3 className="section-sub-title">
                Hover over skills for current proficiency
            </h3>
            <div className='flex flex-col w-full'>
                <div className="flex">
                    <div className="grid grid-cols-4 gap-7">
                        <div className="col-span-4 sm:col-span-2 lg:col-span-1" style={{ opacity: 1, transform: 'none' }}>
                            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
                                <div className="relative mb-2 inline-block text-primary">
                                    <svg className="circle" width="120" height="120" viewBox="0 0 120 120">
                                        <circle className="circlebg" cx="60" cy="60" r="54" pathLength="1" stroke-linecap="round" stroke-width="12"></circle>
                                        <circle cx="60" cy="60" r="54" stroke-linecap="round" stroke-width="12" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.85px 1px"></circle>
                                    </svg>
                                    <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body">85%</span>
                                </div>
                                <h5>UI/UX Design</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 md:gap-10 xl:p-0 w-full">
                    {skills.map((skill) => (
                        <Skill key={skill._id} skill={skill} />
                    ))}

                </div>
            </div>

        </motion.div>
    )
}
