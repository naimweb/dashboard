import React from 'react'
import TodaySelse from './todaySelse'
import Chart from './Chart'
import TopProducs from './TopProducs'
import Config from './LineChart'


function dashboard() {
  return (
      <>
      <div className='flex'>
         <div>

            <TodaySelse />
          </div>

          <div className='grid items-center'>
               <Chart  />
          </div>
        </div>

   
          <TopProducs />
       </>
  )
}

export default dashboard