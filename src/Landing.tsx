import img from './assets/pexels-liza-summer-6347888.jpg'
import { Button } from './components/ui/button';
import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const landing = () => {
  const navigate = useNavigate();
  const textStyle = {
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',

  };

  return (
    <div className=''>


      <div className=' relative overflow-hidden flex items-center justify-end '>

        <div className='absolute flex flex-col px-14 m-5   '>
          <div className=' flex flex-col w-[50vw] md:w-[35vw] '>
            <p className=' text-black text-5xl  py-3  sm:text-7xl  ' style={textStyle}>Grab Fashion In Your Cart </p>
            <p className=' text-black   ' style={textStyle} >Let's take you to the world of fashion. Find your style right here , right now!</p>
          </div>
          <div className='flex py-7 onclick={'>
            <Button className=' bg-black text-white gap-5 rounded-full ' style={textStyle} onClick={() => navigate('/product')}>Explore<MoveRight /></Button>{/* <Button className=' bg-black text-white'> <MoveRight /> </Button> */}
          </div>
        </div>
        <img src={img} alt="" className=' w-full h-[85vh] object-cover' />
      </div>



    </div>
  )
}

export default landing
