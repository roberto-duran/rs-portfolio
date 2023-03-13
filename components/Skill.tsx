'use client'
import React from 'react';
import { ISkill as SkillType } from '../models/ISkill';
import Image from 'next/image'

type Props = {
    skill: SkillType
};

export default function Skill({ skill }: Props) {
    return (
        <div className="flex flex-col cursor-pointer">
            <div className="flex justify-between mb-1">
                <div className="flex items-center text-base font-medium dark:text-white pl-1">
                    <Image
                        src={skill.image}
                        alt={skill.title}
                        height={50}
                        width={50}
                        className="mr-1 w-4 h-4 md:mr-3 md:w-6 md:h-6 xl:w-6 xl:h-6 transition duration-300 ease-in-out"
                    />
                    <span className="text-xs md:text-lg">{skill.title}</span>
                </div>
                <span className="text-sm font-medium dark:text-white pr-1">{skill.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                <div className="bg-defaultColor h-3.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
            </div>
        </div>
    )
}
