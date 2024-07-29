import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-4 border-2 h-[70vh] m-14  rounded-md '>
      <h1 className=' text-3xl font-mono font-semibold '>Login</h1>
      <form action="" className='flex flex-col gap-3 items-center'>
        <label htmlFor="" className="">
         
           <input type="email" placeholder='Enter your email here' className='w-[43vw] lg:w-[20vw] h-8 border-2 rounded-sm p-4'/>
        </label>
        <label htmlFor="" >
           <input type="password" placeholder='Enter password here' className='w-[43vw] lg:w-[20vw] h-8 border-2 rounded-sm p-4'/>
        </label>
        <Button className='w-[20vw] h-9 '>Login</Button>
      </form>
      <Link to={"/signup"}>
         Do not have an Account? Signup
      </Link>
    </div>
    </div>
  )
}

export default Login
