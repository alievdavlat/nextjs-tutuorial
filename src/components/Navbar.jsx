import { navbarItems } from '@/Constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul className='w-full h-[70x] p-6 mb-20 flex items-center justify-center gap-10'>
        {
          navbarItems.map(item => <Link className='w-fit h-fit' href={item.path} key={item.id}><li className='border-2 font-semibold rounded-lg border-yellow-400 p-2 '  >{item.name}</li></Link> )
        }
        

    </ul>
  )
}

export default Navbar