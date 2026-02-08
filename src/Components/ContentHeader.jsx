import React from 'react'

function ContentHeader({tittle,des}) {
  return (
    <>
      <div>
           {tittle  && (
             <h1 className='text-[15px] md:text-[20px]'>{tittle}</h1>
           )
           }

           {
             des && (
                 <p className='text-[10px] md:text-[15px]'>{des}</p>
             )
           }
      </div>
    </>
  )
}

export default ContentHeader