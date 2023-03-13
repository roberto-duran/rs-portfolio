import {BiHomeSmile, BiUser, BiWrench} from 'react-icons/bi'
import {IoSettingsSharp} from 'react-icons/io5'
import Link from 'next/link'

export default function SideBar() {
    return (
        <div className='w-16 hover:w-64 md:w-64 bg-defaultBorderColor
            dark:bg-gray-900 text-white transition-all duration-300 z-10'>
            <div className='overflow-x-hidden'>
                <ul className='flex flex-col py-4 space-y-1'>
                    <li className='px-5 hidden md:block'>
                        <div className='flex flex-row items-center h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>Main</div>
                        </div>
                    </li>
                    <li>
                        <Link href='/dashboard' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <div className="flex flex-col justify-center items-center">
                                <BiHomeSmile className='w-5 h-5' />
                                <span className="block text-sm md:hidden">DB</span>
                            </div>
                            <span className='ml-2 text-sm tracking-wide truncate'>Dashboard</span>
                        </Link>
                        <Link href='/dashboard/forms/skills' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <div className="flex flex-col justify-center items-center">
                                <BiWrench className='w-5 h-5' />
                                <span className="block text-sm md:hidden">SK</span>
                            </div>
                            <span className='ml-2 text-sm tracking-wide truncate'>Skills</span>
                        </Link>
                    </li>
                    <li className='px-5 hidden md:block'>
                        <div className='flex flex-row items-center mt-5 h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>Settings</div>
                        </div>
                    </li>
                    <li>
                        <Link href='#' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <BiUser className='w-5 h-5' />
                            <span className='ml-2 text-sm tracking-wide truncate'>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='#' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <IoSettingsSharp className='w-5 h-5' />
                            <span className='ml-2 text-sm tracking-wide truncate'>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};
