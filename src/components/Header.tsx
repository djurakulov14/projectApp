import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=' w-full h-[80px] flex justify-center items-center bg-slate-500'>
    <nav className='flex gap-3'>
      <Link href="/">Home</Link>
      <Link href="/aboutUs">About Us</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  </header>
  )
}

export default Header