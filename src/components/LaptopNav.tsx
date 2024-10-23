import { RemoveFormatting } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';


const LaptopNav = () => {
 

  return (
    <div>
<nav className='flex justify-between px-5  sm:px-12 items-center py-4 bg-gray-200 shadow-lg text-black '>


<div className='flex items-center'>
<Link to={"/"}>
 <RemoveFormatting className=' size-6 sm:size-8 font-semibold'/>
</Link>
{/* <h1 className=' font-semibold text-xl font-mono'>EEREX</h1> */}
</div>


<div className="px-10 text-xl gap-9 hidden lg:flex" >
{/* {navArr.map((item, index)=>(
 <p className="font-semibold hover:cursor-pointer hover:border-b-2 m-0 " key ={index}>{item}</p> 
))} */}

<Link to={"/"} className='font-semibold '>Home</Link>
{/* <Link to={"/about"}  className='font-semibold '>About</Link> */}
<Link to={"/product"}  className='font-semibold '>Product</Link>

</div>

<div className='flex gap-7'>
 <Link to={"/cart"}>
 <ShoppingCart />
 </Link>
 {/* <Search/> */}
 <Link to={"/signup"}>
 <CircleUserRound/>
 </Link>
 

</div>
</nav>
    </div>
  )
}

export default LaptopNav
