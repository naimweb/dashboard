import React from 'react'
import ContentHeader from '../ContentHeader'
import {Data} from '../Data/Data'


function todaySelse() {
  return (
     <div className='p-4'>

     <ContentHeader tittle ="Today selese" des ="sales Summery"/>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>

         {
            Data && 
            Data.map((data)=>{
                return (
                    <div key={data.id} className='bg-gray-700 rounded-md p-4'>
                     
                        <div className='mt-2'>
                            <p className='text-[20px] font-semibold'>{data.count}</p>
                            <h1 className='text-white text-2xl font-stretch-expanded'>{data.title}</h1>
                            
                            <p style={{color:data.color}} className='text-2xl font-bold'>{data.des}</p>

                        </div>

                       

                       
                    </div>
                )
            })
         }
          
      </div>
     </div>
  )
}

export default todaySelse