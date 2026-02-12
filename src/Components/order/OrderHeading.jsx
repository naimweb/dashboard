import React from 'react'
import {methodData} from "../Data/Data"


function OrderHeading() {
  return (
      <> 
       <div className='flex justify-between border p-2 mt-5 w-ful rounded-full pr-4'>
             <h1 className='flex items-center'>Order</h1>
             <button className='bg-red-700 p-2 border-none rounded-full hover:bg-green-700'>Create Order </button>
           </div>

  <div className='flex justify-between w-full mt-9'>
    {methodData.map((i,ind)=>(
      <div key={ind} className='flex mt-2 justify-between '>
         <div className='flex gap-x-[132px]'>
           <h3>{i.order}</h3>
            <h1>{i.date}</h1>
           <h3>{i.customer}</h3>
           <h3>{i.payment}</h3>
           <h3>{i.total}</h3>
           <h3>{i.delevery}</h3>
           <h3>{i.action}</h3>
           </div> 

  
  
      </div>
    ))}
     
  </div>  {/*end */}

     
  </>
  )
}

export default OrderHeading