'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../../models/skill';
import SkillCircle from "./SkillCircle";

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

            <div className='flex flex-col w-full'>
                <div className="grid gap-3 grid-cols-3 w-full">
                    {/* general progress */}
                    <SkillCircle title='FrontEnd' percentage={95} />
                    <SkillCircle title='Backend' percentage={90} />
                    <SkillCircle title='DataBases' percentage={98} />
                </div>

                <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 md:gap-10 xl:p-0 w-full">
                    {skills.map((skill) => (
                        <Skill key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>

        </motion.div>
    )
}
