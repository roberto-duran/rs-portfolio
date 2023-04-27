"use client";
import React from "react";
import Image from "next/image";
const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // @ts-ignore
    document.getElementById("presentation").scrollIntoView();
  };
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center z-50">
        <a href="/" onClick={scrollToTop}>
          <Image
            className="hidden rounded-full filter opacity-50 hover:opacity-100 sm:block"
            width={40}
            height={40}
            src="/images/base.png"
            alt="logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
