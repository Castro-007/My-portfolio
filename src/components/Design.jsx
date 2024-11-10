import React from 'react'

const Design = (props) => {
  return (
    <div onClick={props.onClick}>
              <div className='cursor-pointer' >
          <div className='relative group w-[350px] sma:w-[150px] sma:h-[200px] mda:w-[150px] mda:h-[200px] h-[300px] my-3 rounded-lg overflow-hidden'>
          <img src={props.img} loading='lazy' alt="" className='w-full h-full rounded-lg duration-300 group-hover:scale-105' />
        <div className="absolute inset-0 bg-green-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-40"></div>
          </div>
        <span>
        <h1 className='text-xl sma:text-base mda:text-base font-Nunito mb-5 text-white'>{props.name}</h1>
        </span>
        </div>
    </div>
  )
}

export default Design
