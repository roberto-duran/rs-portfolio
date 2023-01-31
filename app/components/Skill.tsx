'use client'
import React from 'react';
import Image from "next/image";
import { Skill as SkillType } from '../../models/skill';
import { urlFor } from "../../sanity";

type Props = {
    directionLeft?: boolean
    skill: SkillType
};

export default function Skill({ directionLeft, skill }: Props) {
    return (
        <div className="flex flex-col cursor-pointer">
            <div className="flex justify-between mb-1">
                <div className="flex items-center text-base font-medium dark:text-white pl-1">
                    <Image
                        src={urlFor(skill.image).url()}
                        alt={skill.title}
                        height={10}
                        width={10}
                        className="mr-1 w-4 h-4 md:mr-3 md:w-6 md:h-6 xl:w-6 xl:h-6 transition duration-300 ease-in-out"
                    />
                    {skill.title}
                </div>
                <span className="text-sm font-medium dark:text-white pr-1">{skill.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                <div className="bg-defaultColor h-3.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
            </div>
        </div>
    )
}
