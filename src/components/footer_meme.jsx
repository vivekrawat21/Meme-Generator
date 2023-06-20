import React from 'react'
import Heart from '../images/heart-svgrepo-com.svg'
function footer_meme() {
  return (
<footer className='mt-[12vh]'>
            <div className='flex justify-center  bg-slate-800 h-16 items-center'>
               <div className=" text-xl font-semibold text-white"><span className='flex items-center'>all rights reserseved  by vivek &copy; made with <img src={Heart}  alt="Love" className='inline-block w-6 mx-2'/></span>  </div>
            </div>
        </footer>
  )
}

export default footer_meme