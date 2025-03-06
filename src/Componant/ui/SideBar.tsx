'use client';

import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCreateOutline } from 'react-icons/io5';


import { FaBloggerB } from 'react-icons/fa6';
import Image from 'next/image';
import { useUser } from '@/context/userContext';
import { FcSalesPerformance } from 'react-icons/fc';
import { BsCart4 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const pathname = usePathname();
    const {user}=useUser()

    // Toggle Sidebar
    const handleToggle = () => {
        setActive(!isActive);
    };

    // Check active link
    const isActiveLink = (path: string) => (pathname === path ? 'text-green-500' : 'text-white');

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden p-4'>
                <Link href={'/'}> <Image height={50} width={50} alt="pic" src={'https://html.pixelfit.agency/sasly/sasly-creative-agency/assets/images/loader.png'} ></Image></Link>

                <button onClick={handleToggle} className='focus:outline-none'>
                    <AiOutlineBars className='h-7 w-7 text-[#0ecdb9]' />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-20 flex flex-col justify-between w-64 bg-[#212529] text-white p-4 
                transform ${isActive ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 transition-transform duration-300 ease-in-out`}>

                {/* Sidebar Header */}
                <div className="hidden md:flex justify-center">
                    <Link href={'/'}> <Image height={50} width={50} alt="pic" src={'https://html.pixelfit.agency/sasly/sasly-creative-agency/assets/images/loader.png'} ></Image></Link>
                </div>

                <h1 className='capitalize text-center mt-4'>{user?.role}</h1>

                {/* Navigation Items */}
                <nav className='mt-6'>
                    {user?.role === 'user' && (
                        <div>
                            <Link
                                href='/dashboard/user/product'
                                className={`flex items-center px-4 py-2 transition duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${isActiveLink('/dashboard/user/product')}`}
                            >
                                <FaBloggerB className='text-green-500' />
                                <span className='mx-4 font-medium'>Created Product</span>
                            </Link>
                            <Link
                                href='/dashboard/user/listing'
                                className={`flex items-center px-4 py-2 transition duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${isActiveLink('/dashboard/user/listing')}`}
                            >

                               
                                <IoCreateOutline className='text-green-500' />
                                <span className='mx-4 font-medium'>Create Listing</span>
                            </Link>
                            <Link
                                href='/dashboard/user/sales-history'
                                className={`flex items-center px-4 py-2 transition duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${isActiveLink('/dashboard/user/sales-history')}`}
                            >


                                <FcSalesPerformance />
                                <span className='mx-4 font-medium'>Sales history</span>
                            </Link>
                            <Link
                                href='/dashboard/user/Purchases'
                                className={`flex items-center px-4 py-2 transition duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${isActiveLink('/dashboard/user/Purchases')}`}
                            >



                                <BsCart4 className='text-green-500' />
                                
                                <span className='mx-4 font-medium'>Purchases</span>
                            </Link>
                            <Link
                                href='/dashboard/user/profile'
                                className={`flex items-center px-4 py-2 transition duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${isActiveLink('/dashboard/user/profile')}`}
                            >




                                <CgProfile className='text-green-500' />
                                <span className='mx-4 font-medium'>Profile</span>
                            </Link>
                        </div>

                    )}
                </nav>

                {/* Profile & Footer */}
                <div className="border-t border-gray-600 mt-auto pt-4">
                    {/* Add profile-related items here */}
                </div>
            </div>

            {/* Overlay for small screens */}
            {isActive && (
                <div
                    className="fixed inset-0  bg-opacity-50 md:hidden"
                    onClick={handleToggle}
                ></div>
            )}
        </>
    );
};

export default Sidebar;