import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 border-2 h-[70vh] m-14  rounded-md '>
      <h1 className=' text-3xl font-mono font-semibold '>Signup</h1>
      <form action="" className='flex flex-col gap-3 items-center'>
        <label htmlFor="" >
            
            <input type="email" placeholder='Enter your email here' className='w-[43vw] lg:w-[20vw] h-8 border-2 rounded-sm p-4'/>
        </label>
        <Button className='w-[20vw] h-9 '>Send OTP</Button>
      </form>
      <Link to={"/login"}>
         Already have an Account? Login
      </Link>
    </div>
  )
}

export default Signup
