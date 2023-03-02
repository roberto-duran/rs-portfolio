import "../styles/globals.css"
import AuthHeader from './components/AuthHeader'
import BaseFooter from '../../components/BaseFooter'

export default async function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body>
            <div className="bg-[rgb(11,18,35)] text-white">
                <AuthHeader />
                <main className="mx-auto flex justify-center h-[82.7vh] -mt-20">
                    <div className="flex flex-col w-1/2 md:w-[500px] bg-white h-fit
                    shadow-amber-100 text-gray-800 p-6 rounded-md space-y-6">
                        {children}
                    </div>
                </main>
                <BaseFooter />
            </div>
        </body>
        </html>
    );
}
