import Header from '@/components/Header'
import React from 'react'

type Props = {
    children: any,
}

const MainLayout = (props: Props) => {
  return (
    <div>
        <Header/>
        {props.children}
    </div>
  )
}

export default MainLayout