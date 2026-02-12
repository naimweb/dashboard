import React from 'react'
import PicProfile from './PicProfile'


function profile() {
  return (
    <>
    
      <div className='pt-5'>
          <div className=' '>
               <div className='w-[90px] h-[90px] bg-amber-500 mx-auto rounded-full'></div>
             <div className='text-center mt-5 '>
              
                 <PicProfile />
             </div>
                
             
          </div>
      </div>
    </>
  )
}

export default profile