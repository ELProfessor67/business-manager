import Link from 'next/link'
import React,{memo} from 'react'

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Get Business Manager. Get Growing
            </h1>
            <p className="mb-8 leading-relaxed">Maintain a winning reputation, engage digitally, and deliver an exceptional customer experience - all from one intuitive platform.</p>
            <div className="flex justify-center">
                <Link href={'/'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Watch Demo</Link>
                <Link href={'/'} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See Pricing</Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/images/img-homepage-banner.webp"/>
            </div>
        </div>
    </section>
  )
}

export default memo(HeroSection)