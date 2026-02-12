import React from 'react'

function PaymentList() {

  const Payment = Array.from({ length: 20 }, (_, i) => ({
    number: `#${i + 1}`,
   date: new Date(
  new Date().getFullYear(),
  Math.floor(Math.random()*12),
  Math.floor(Math.random()*28)+1
).toLocaleDateString(),

    coustomer: `Customer ${i + 1}`,
    payment: i % 2 === 0 ? "success" : "pending",
    total: (Math.random()* 100).toFixed(2),
    delevery: i % 2 === 0 ? "our camp" : "home",
    actionR: "Rename",
    actionD: "Delete"
  }));

  return (
    <div className='mt-6 w-[95%] mx-auto'>
      <div className='bg-gray-700 shadow-lg rounded-lg overflow-hidden'>

        {/* Header */}
        <div className='grid grid-cols-7 bg-gray-500 p-4 font-semibold text-gray-600 text-sm'>
          <h1>ID</h1>
          <h1>Date</h1>
          <h1>Customer</h1>
          <h1>Status</h1>
          <h1>Total</h1>
          <h1>Delivery</h1>
          <h1 className='text-center'>Action</h1>
        </div>

        {/* Data */}
        {Payment.map((p, i) => (
          <div
            key={i}
            className='grid grid-cols-7 p-4 items-center text-sm border-t hover:bg-gray-50 transition'
          >
            <h1>{p.number}</h1>
            <h1>{p.date}</h1>
            <h1>{p.coustomer}</h1>

            {/* Status badge */}
            <h1>
              <span className={`px-2 py-1 rounded-full text-green-900 text-xs 
                ${p.payment === "success" ? "bg-green-500" : "bg-yellow-500"}`}>
                {p.payment}
              </span>
            </h1>

            <h1 className='font-medium text-gray-700'>${p.total}</h1>
            <h1>{p.delevery}</h1>

            {/* Action buttons */}
            <div className='flex justify-center gap-2'>
              <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs'>
                {p.actionD}
              </button>
              <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs'>
                {p.actionR}
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default PaymentList
