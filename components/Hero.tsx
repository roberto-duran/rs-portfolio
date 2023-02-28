'use client'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import {PageInfo} from "../models/pageInfo";

type Props = {
    pageInfo: PageInfo | null;
}

const Hero = ({ pageInfo }: Props) => {
    const [text] = useTypewriter({
        words: [
            `Hi, I am ${pageInfo?.name}`,
            "Keep It Simple",
            "Let's build something amazing"
        ],
        loop:true,
        delaySpeed:2000
    });
    return (
        <div className="h-screen flex flex-col space-y-8 justify-center
        text-center overflow-hidden relative background-pattern-rhombus">
            <div className="relative flex flex-col items-center">
                <Image className="relative rounded-full mx-auto object-cover mb-5"
                       src={pageInfo?.image as string}
                       width={250}
                       height={250}
                       alt='Roberto Duran'

                />
                <div className="z-20">
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                        {pageInfo?.role}
                    </h2>
                    <h1 className="flex items-center h-[160px] md:h-auto text-5xl lg:text-6xl font-semibold px-10">
                        <span className="text-gray-300 mr-3">{text}</span>
                        <Cursor cursorColor="#2a8b43" />
                    </h1>
                    <div className="pt-5">
                        <a href="#about">
                            <button className="heroButton">About</button>
                        </a>
                        <a href="#experience">
                            <button className="heroButton">Experience</button>
                        </a>
                        <a href="#skills">
                            <button className="heroButton">Skills</button>
                        </a>
                        <a href="#projects">
                            <button className="heroButton">Projects</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
