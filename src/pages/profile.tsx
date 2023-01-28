import MainLayout from '@/Layout/MainLayout'
import { useRouter } from 'next/router'
import React from 'react'

type infoTypes = {
    userName?: string,
    email?: string,
    password?: string
}

const profile = () => {
    const [info, setInfo] = React.useState<infoTypes>({userName: "", password: "", email: ""})
    const router = useRouter()

    React.useEffect(() => {
        if(typeof window !== "undefined"){
            let userInfo: any = localStorage.getItem("userInfo"); userInfo = JSON.parse(userInfo)
    
            setInfo(userInfo);
            console.log(userInfo);
            
            if(userInfo == null){
                router.push("/singIn")
            }
        }
    }, [])
    
    
  return (
    <MainLayout>
        <div className='w-fit m-auto mt-5'>
            <h1 className='text-center text-xl font-bold'>Your data</h1>
            <ul>
                <li>{info?.userName}</li>
                <li>{info?.email}</li>
                <li>{info?.password}</li>
            </ul>
        </div>
    </MainLayout>
  )
}

export default profile