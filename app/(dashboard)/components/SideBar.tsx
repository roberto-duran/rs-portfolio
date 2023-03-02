import {BiHomeSmile, BiUser} from 'react-icons/bi'
import {IoSettingsSharp} from 'react-icons/io5'

export default function SideBar() {
    return (
        <div
            className='w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 text-white transition-all duration-300 border-none z-10'>
            <div className='overflow-x-hidden'>
                <ul className='flex flex-col py-4 space-y-1'>
                    <li className='px-5 hidden md:block'>
                        <div className='flex flex-row items-center h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>Main</div>
                        </div>
                    </li>
                    <li>
                        <a href='#' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <BiHomeSmile className='w-5 h-5' />
                            <span className='ml-2 text-sm tracking-wide truncate'>Dashboard</span>
                        </a>
                    </li>
                    <li className='px-5 hidden md:block'>
                        <div className='flex flex-row items-center mt-5 h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>Settings</div>
                        </div>
                    </li>
                    <li>
                        <a href='#' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <BiUser className='w-5 h-5' />
                            <span className='ml-2 text-sm tracking-wide truncate'>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex flex-row items-center h-11 p-5 hover:bg-gray-600'>
                            <IoSettingsSharp className='w-5 h-5' />
                            <span className='ml-2 text-sm tracking-wide truncate'>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};
