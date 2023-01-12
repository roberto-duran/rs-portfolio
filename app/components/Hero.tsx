'use client'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from "../../models/pageInfo";
import {urlFor} from "../../sanity";

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text] = useTypewriter({
        words: [
            `Hi, I am ${pageInfo.name}`,
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
                       src={urlFor(pageInfo.heroImage).url()}
                       alt='Roberto Duran'
                       width={150}
                       height={150}
                />
                <div className="z-20">
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                        {pageInfo.role}
                    </h2>
                    <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                        <span className="text-gray-300 mr-3">{text}</span>
                        <Cursor cursorColor="#2a8b43" />
                    </h1>
                    <div className="pt-5">
                        <Link href="#about">
                            <button className="heroButton">About</button>
                        </Link>
                        <Link href="#experience">
                            <button className="heroButton">Experience</button>
                        </Link>
                        <Link href="#skills">
                            <button className="heroButton">Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="heroButton">Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
