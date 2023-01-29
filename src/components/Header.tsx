import Link from 'next/link'
import React from 'react'
import Modalcha from './_child/Modalcha'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=' w-full h-[80px] flex justify-between items-center bg-slate-500 p-5'>
      <nav className='flex gap-3'>
        <Link href="/">Home</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <Modalcha/>
    </header>
  )
}

export default Header