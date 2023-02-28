import "../styles/globals.css"
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { db } from "../lib/db";
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: {
        default: 'Roberto Duran',
        template: '%s | Roberto Duran',
    },
    description: 'Developer, writer, and creator.',
    openGraph: {
        title: 'Roberto Duran',
        description: 'Developer, writer, and creator.',
        url: 'https://robertoduran.me',
        siteName: 'Roberto Duran',
        images: [
            {
                url: 'https://robertoduran.me/api/roberto',
                width: 1920,
                height: 1080,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Roberto Duran',
        card: 'summary_large_image',
    },
    icons: {
        shortcut: '/favicon.ico',
    },
    verification: {
        google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
        yandex: '14d2e73487fa6c71',
    },
};


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
