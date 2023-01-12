'use client'

import { motion } from "framer-motion";
import {PageInfo} from "../../models/pageInfo";
import {urlFor} from "../../sanity";

type Props = {
    pageInfo: PageInfo;
}
const About = ({pageInfo}: Props) => {
    return (
        <div className="flex flex-col relative justify-evenly mx-auto items-center
        h-screen text-center md:text-left max-w-7xl px-10 background-pattern-rhombus-left">
            <h3 className="section-title">
                About
            </h3>
            <motion.img src={urlFor(pageInfo.profilePic).url()}
                        initial={{
                            x:-200,
                            opacity:0
                        }}
                        whileInView={{
                            x: 0,
                            opacity:1
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
                        object-cover md:rounded-lg md:w-64 md:h-64"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline underline-offset-8 decoration-defaultColor/50">little</span> background
                </h4>
                <p className="text-base">
                    {pageInfo.backgroudInformation}
                </p>
            </div>
        </div>
    );
};

export default About;
