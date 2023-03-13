import "../styles/globals.css"
import React, {Suspense} from 'react'
import {authOptions} from '../../pages/api/auth/[...nextauth]'
import {getServerSession} from 'next-auth'
import {redirect} from 'next/navigation'
import BaseFooter from '../../components/BaseFooter'
import DashboardHeader from './components/DashboardHeader'
import SideBar from './components/SideBar'
import Loading from './loading'

export default async function RootLayout({children}: { children: React.ReactNode; }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/session/login');
    }
    return (
        <html lang="en">
        <body>
            <div className="bg-[rgb(11,18,35)] text-white z-0">
                <DashboardHeader image={session.user?.image || ''} />
                <div className="flex flex-row h-[88.15vh]">
                    <SideBar />
                    <main className="flex py-10 mx-auto">
                        <Suspense fallback={<Loading />}>
                            {children}
                        </Suspense>
                    </main>
                </div>
                <BaseFooter />
            </div>
        </body>
        </html>
    );
}
