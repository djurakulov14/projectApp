import MainLayout from '@/Layout/MainLayout'
import Button from '@mui/material/Button'
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

            }
        }
    }, [])
    
    if(info == null) {
        return (
            <MainLayout>
                <div className='w-fit m-auto mt-5 flex flex-col items-center gap-3'>
                    <h1 className='font-bold text-xl'>Sing In first</h1>
                    <Button variant='outlined' onClick={() => router.push("/singIn")}>Sing In</Button>
                </div>
            </MainLayout>
        )
    }

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