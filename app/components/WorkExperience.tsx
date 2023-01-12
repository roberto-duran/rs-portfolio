import React from 'react'
import ExperienceCard from './ExperienceCard'
import {Experience} from "../../models/experience";

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="section-title ">
            Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll ml-5 p-10 snap-x snap-mandatory">
            {experiences.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} />
            ))}

        </div>
    </div>
  )
}
