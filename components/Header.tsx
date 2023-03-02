'use client'
import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {Social} from "../models/social";

type Props = {
    socials: Social[];
}
const Header = ({socials}: Props) => {
    const redirectLink = (event: React.MouseEvent<HTMLElement>)  => {
        window.location.href = `#${event.currentTarget.dataset.link}`;
    }

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between
        max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div initial={{
                            x:-500,
                            opacity:0,
                            scale:1
                        }}
                        animate={{
                            x:0,
                            opacity:1,
                            scale:1
                        }}
                        transition={{
                            duration:1.5
                        }}
                        className="flex flex-row items-center">
                { socials.map((social) => (

                    <SocialIcon url={social.url as string}
                                key={social.id}
                                fgColor="gray"
                                bgColor="transparent"
                                target="_blank"
                    />
                ))}
            </motion.div>
            <motion.div initial={{
                                x:500,
                                opacity:0,
                                scale:1
                            }}
                            animate={{
                                x:0,
                                opacity:1,
                                scale:1
                            }}
                            transition={{
                                duration:1.5
                            }}
                            className="flex flex-row items-center text-gray-200 cursor-pointer"
                            onClick={redirectLink}
                            data-link="contact"
                            >
                <SocialIcon className="cursor-pointer"
                            network="email"
                            url="#contact"
                            fgColor="gray"
                            bgColor="transparent"
                            aria-label="email"
                />
                <span className="hidden md:inline-flex uppercase text-sm text-gray-400">Get in touch</span>
            </motion.div>
        </header>
    );
};

export default Header;
