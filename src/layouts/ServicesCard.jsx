import React from 'react'

const ServicesCard = ({icon , title}) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
        <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>{icon}</div>
        <h1 className='font-semibold text-lg'>{title}</h1>
        <p>Explore our comprehensive lab test section
           for accurate diagnostics, timely results,
            and personalized insights, ensuring informed
             decisions for optimal health.</p>

        <h3 className='text-backgroungColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out'>Learn More</h3>
    </div>
  )
}

export default ServicesCard