import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center z-50">
                <a href="#">
                    <Image className="rounded-full filter opacity-50 hover:opacity-100"
                           src="/images/base.png" alt="logo" width={40} height={40}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
