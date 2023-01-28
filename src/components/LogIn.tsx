import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';

type infoType = {
    email: string,
    userName: string,
    password: string,
}

const LogIn = () => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [info, setInfo] = React.useState<infoType>({email: "",userName: "", password: ""});
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data: any) => console.log(data);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className='flex flex-col gap-3'>
        <h1 className=" text-center font-bold text-lg">Sing-in</h1>
		<form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
			<TextField id="outlined-basic" label="Email" type="email" variant="outlined" {...register("email")} />
			<TextField id="outlined-basic" label="Username" type="text" variant="outlined" {...register("userName")} />
			<OutlinedInput
				id="outlined-adornment-password"
				type={showPassword ? 'text' : 'password'}
				label="Password"
				{...register("password")}
				endAdornment={
				<InputAdornment position="end">
					<IconButton
					aria-label="toggle password visibility"
					onClick={handleClickShowPassword}
					edge="end"
					>
					{showPassword ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				</InputAdornment>
				}
			/>
			<Button variant="outlined" type='submit'>Sing-in</Button>
		</form>
    </div>
  )
}

export default LogIn