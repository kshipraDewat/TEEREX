import { RemoveFormatting } from 'lucide-react';
import { AtSign } from 'lucide-react';
const Footer = () => {
  return (
    <div className="px-2 lg:px-12 border-t-2 border-gray-200 h-20 gap-5 bg-zinc-200 flex items-center justify-between sm:h-12 ">
      
      <div className='flex'>
        <AtSign className='size-4'/>
        <h1 className=' font-mono font-bold text-3xl'>TeeRex</h1>
      </div>

      <div className='flex gap-3 font-thin '>
        <p className=' text-xs'>Pricing</p>
        <p className=' text-xs' >Account</p>
        <p className=' text-xs '>Refund Policy</p>
        <p className=' text-xs '>Privacy Policy</p>
        <p className=' text-xs '>Terms & Condition</p>
      </div>
      
     </div>
      
      
  )
}

export default Footer
