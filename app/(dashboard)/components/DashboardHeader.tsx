'use client';
import {signOut} from 'next-auth/react'
import Image from 'next/image';
type Props = {
    image: string
}

export default function DashboardHeader({image}: Props) {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={image} alt={"user image"} width={64} height={64} className={"rounded-full"}/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <button className="btn" onClick={() => signOut({callbackUrl: '/session/login'})}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
