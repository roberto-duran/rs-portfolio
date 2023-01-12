'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import {Skill as SkillType}  from '../../models/skill';

type Props = {
    skills: SkillType[]
}

export default function Skills({skills}: Props) {
  return (
    <motion.div className="h-screen relative flex  flex-col text-center 
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center"
                initial={{ opacity:0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration:1.5 }}
    >
        <h3 className="section-title">
            Skills
        </h3>

        <h3 className="section-sub-title">
            Hover over skills for current proficiency
        </h3>

        <div className="absolute top-36 grid grid-cols-4 gap-5">
            {skills.slice(0, skills.length/ 2).map((skill) => (
                <Skill key={skill._id} skill={skill} />
            ))}
            {skills.slice(skills.length/ 2, skills.length).map((skill) => (
                <Skill key={skill._id} skill={skill} directionLeft />
            ))}
        </div>
    </motion.div>
  )
}
