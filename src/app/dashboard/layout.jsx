import React from 'react'
import dynamic from 'next/dynamic'
 
const Sidebar = dynamic(() => import('../../components/layouts/Sidebar'), { ssr: false })
 

const layout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='p-5 flex-1 h-screen overflow-y-auto'>
            {children}
        </div>
    </div>
  )
}

export default layout