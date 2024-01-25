"use client"
import React, { memo, useCallback, useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { AiFillInstagram } from "react-icons/ai";
import { MdSms, MdStarRate, MdDashboard, MdScanner } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { usePathname } from 'next/navigation';
import { MdQrCodeScanner } from "react-icons/md";


const sidebarOpetion = {
    width: '18rem',
    backgroundColor: 'white',
    rootStyles: {
        display: 'flex',
        flexDirection: 'column',
        [`.${sidebarClasses.container}`]: {
            boxShadow: "0px 8px 10px 5px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease"
        },
    }

}


const hoverActiveStyle = {
    backgroundColor: '#e0e7ff',
    color: '#4F46E4',
}
const menuItemStyles = {
    overflowY: 'auto',
    button: {
        [`&.active`]: hoverActiveStyle,
        [`&:hover`]: hoverActiveStyle,
    },
}

const MenuItemsData = [
    {
        name: 'Dashboard',
        icons: <MdDashboard size={35} color='#00f3ff' />,
        href: '/dashboard'
    },
    {
        name: 'Facebook',
        icons: <IoLogoFacebook size={35} color='#4f46e5' />,
        href: '/dashboard/facebook'
    },
    {
        name: 'Instagram',
        icons: <AiFillInstagram size={35} color='#C13584' />,
        href: '/dashboard/facebook'
    },
    {
        name: 'Twiiter',
        icons: <IoLogoTwitter size={35} color='#1DA1F2' />,
        href: '/dashboard/twitter'
    },
    {
        name: 'Linkedin',
        icons: <IoLogoLinkedin size={35} color='#0077b5' />,
        href: '/dashboard/linkedin'
    },
    {
        name: 'SMS',
        icons: <MdSms size={35} color='#2ba63d' />,
        href: '/dashboard/sms'
    },
    {
        name: 'Mail',
        icons: <IoMdMail size={35} color='#dd090b' />,
        href: '/dashboard/mail'
    },
    {
        name: 'Review',
        icons: <MdStarRate size={35} color='#f6f605' />,
        href: '/dashboard/review'
    },
    {
        name: 'Business',
        icons: <SiSimpleanalytics size={25} color='#2b85de' />,
        href: '/dashboard/business'
    },
    {
        name: 'Scan Website',
        icons: <MdQrCodeScanner size={25} color='#2b85de' />,
        href: '/dashboard/scan-website'
    },

]


const SidebarComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const { user } = useUser();
    const pathname = usePathname();


    const handleCollapse = useCallback(() => {
        setExpanded(prev => !prev);
    }, []);




    return (
        <Sidebar collapsed={expanded} {...sidebarOpetion}>
            <div className='p-4 mb-2 pxg-3 flex justify-between items-center pr-2 border-b border-gray-100'>
                <div className={`flex-1 flex justify-center items-center ${expanded ? 'hidden' : 'flex'}`}>

                    {
                        user?.imageUrl
                            ? (<Image priority={true} src={user?.imageUrl} alt='avatar' width={200} height={200} className={`w-28 rounded-full ${expanded ? 'hidden w-0' : 'block'}`} />)
                            : (
                                <div className={`w-28 h-28 rounded-full bg-purple-100 grid place-items-center ${expanded ? 'hidden w-0' : 'block'}`}>
                                    <h2 className='text-purple-600 text-5xl'>{user?.firstName[0].toUpperCase()}{user?.lastName[0].toUpperCase()}</h2>
                                </div>
                            )
                    }


                </div>

                <div className='toggler'>
                    <button onClick={handleCollapse} className='bg-none outline-none border-none p-2 bg-indigo-100 rounded-full text-indigo-600'>
                        {expanded ? <IoIosArrowForward size={30} /> : <IoIosArrowBack size={30} />}
                    </button>
                </div>
            </div>
            <div className='flex-1 overflow-x-auto'>
                <Menu menuItemStyles={menuItemStyles}>
                    {
                        MenuItemsData.map(data => (
                            <MenuItem  key={data.name} icon={data.icons} active={pathname === data.href}>
                                <Link href={data.href} className='text-gray-800 text-xl'>{data.name}</Link>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </div>
        </Sidebar>
    )
}

export default memo(SidebarComponent);