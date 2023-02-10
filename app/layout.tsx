import "../styles/globals.css"
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { db } from "../lib/db";

async function getSocials() {

    return db.social.findMany({
        select: {
            id: true,
            title: true,
            url: true,
        }
    })
}
export default async function RootLayout({children}: { children: React.ReactNode; }) {
    const socials = await getSocials();
    return (
        <html>
        <body>
            <div className="bg-[rgb(11,18,35)] text-white h-screen snap-y snap-mandatory
             overflow-y-scroll overflow-x-hidden z-0">
                <Header socials={socials}/>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </body>
        </html>
    );
}
