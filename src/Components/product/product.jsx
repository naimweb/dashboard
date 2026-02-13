import React from 'react'
import HeaderProduct from './HeaderProduct'
import MyBarChart from './BarChr.jsx'


function product() {
  return (
     <>
     {/* component call😊  */}
         <div>

             <HeaderProduct />
             <div className='mt-4'>

             <MyBarChart />
             </div>
         </div>

     </>
  )
}

export default product