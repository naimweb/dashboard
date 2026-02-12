import React from 'react'
import ContentHeader from "../ContentHeader"
import {HeadingEvarage} from "../Data/Data"
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
function PicProfile() {
  return (
    <>
      <ContentHeader  tittle="Md Naim " />
      <div className='flex justify-start text-start'>
         
     <p className='w-[50%] mx-auto mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatem id optio, eos sint sequi molestias ullam culpa nihil quaerat veritatis ipsum aut. Excepturi illo, nulla itaque soluta id autem.</p>
  </div>

    <div className='flex justify-around bg-gray-500 w-[900px] mx-auto mt-5 p-5 rounded-md'>
           <div className='flex gap-[280px]'>
        {HeadingEvarage.map((i,ind)=>(
          <div key={ind}>
         
           <h1 className='font-bold text-3xl'>{i.Name}</h1>
           <p className='text-red-500 text-[20px]' style={{color:"red"}}>{i.expence}</p>
         
          </div> 

        
        ))}
  
       
       </div>
       </div>
     {/* icon section  */}

 <div className='flex justify-center mt-9 border-none w-[69%] m-auto p-3 bg-amber-500 rounded-2xl'>
  <div className='flex justify-around w-full'>
    <a href="#" className='px-4 border-r border-gray-400 text-4xl hover:text-5xl transition-all '>
      <FaFacebook />
    </a>
    <a href="#" className='px-4 border-r border-gray-400 text-4xl hover:text-5xl transition-all'>
      <FaLinkedin />
    </a>
    <a href="#" className='px-4 text-4xl hover:text-5xl transition-all'>
      <FaGithub />
    </a> 
  </div>
</div>

  
    
    </>
  )
}

export default PicProfile