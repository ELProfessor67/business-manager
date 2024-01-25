"use client";
import React, { memo } from 'react'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import { useUser,SignInButton } from "@clerk/nextjs";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { isSignedIn } = useUser();


  // we will hide header on dashboard pages 
  const pathname = usePathname();
  if (pathname.includes('/dashboard')) {
    return <></>
  }

  return (
    <header className="bg-gray-100 body-font shadow-xl">
      <div className="container bg-gray-100 mx-auto flex flex-wrap px-5 py-5 flex-col md:flex-row items-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <span className="text-2xl">Business Manager</span> */}
          <Image priority={true}  src={'/images/logo-2.png'} alt='logo' width={200} height={100} className='w-28 object-cover' />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Solution</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Product</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Partner</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Pricing</Link>
          {
            isSignedIn && <Link href={'/dashboard'} className="mr-5 hover:text-gray-900 cursor-pointer">Dashboard</Link>
          }
        </nav>

        {
          isSignedIn
            ? <UserButton afterSignOutUrl="/" />
            : <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><SignInButton/>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
        }


      </div>
    </header>
  )
}

export default memo(Header);