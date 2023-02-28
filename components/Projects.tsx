'use client'

import React from "react";
import {motion} from "framer-motion";
import {Project} from "../models/project";
import Image from 'next/image'

type Props = {
    projects: Project[];
};

export default function Projects({projects}: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            key={234}
            className="h-screen relative flex overflow-hidden flex-col
    items-center md:flex-row max-w-full justify-evenly z-0"
        >
            <h3 className="section-title">Projects</h3>

            <div
                className="relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-mandatory z-20"
            >
                {projects.map((project, i) => (
                    <div key={project.id}
                        className="w-screen flex flex-col flex-shrink-0 h-screen
            snap-center space-y-5 items-center justify-center p-20 md:p-44">
                        <motion.div
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 1.2}}
                            viewport={{once: true}}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={300}
                            />
                        </motion.div>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline underline-offset-8 decoration-defaultColor/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>

                            <div className="flex items-center space-x-2 justify-center">
                                {project.skills.map((skill) => (
                                    <Image src={skill.image}
                                           alt={skill.title}
                                           width={40}
                                           height={40}
                                           className="hover:scale-110"
                                           key={skill.id}
                                    />
                                ))}
                            </div>

                            <p className="text-lg text-center md:text-left">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="w-full absolute top-[30%] bg-[#2a8b43]/10 left-0
        h-[500px] -skew-y-12"
            ></div>
        </motion.div>
    );
}
