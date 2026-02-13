import React from 'react'

import ContentHeader from './../ContentHeader';
import { PrdData } from './prdData';

function HeaderProduct() {
  return (
     <>
      <div className='mt-5'>

      <ContentHeader  tittle="Product Dashboard"/>
      </div>
      <div className='  flex-col-1 lg:flex flex-row justify-between mt-[50px] text-center pl-4 pr-5  '>
          {PrdData.map((i,ind)=> (
             <div key={ind}>
                <div className='pr-5 border-r '>

                 <h1 className='font-bold text-1xl'>{i.name}</h1>
                 <h2>{i.stack}</h2>
                </div>

             </div>
          ))}
      </div>

      {/* bar chart */}
      <div>
         <div>
              
         </div>
      </div>


     </>
  )
}

export default HeaderProduct