import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Register from '@/components/Register'
import Link from 'next/link'
import MainLayout from '@/Layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <main className='container m-auto'>
          <h1 className='text-center'>Content</h1>
        </main>
      </MainLayout>
    </>
  )
}
