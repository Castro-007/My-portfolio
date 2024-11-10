import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjCards = (props) => {
  return (
    <div>
      <div className='w-[350px] group sma:w-[150px] sma:h-[200px] mda:w-[150px] mda:h-[200px] self-center h-[300px] my-3 rounded-lg overflow-hidden'>
        <a href={props.link} className='relative'>
        <img src={props.imgs} loading='lazy' alt="" className=' w-full h-full rounded-lg duration-300 group-hover:scale-' />
        <div className="p-2 absolute inset-0 top-12 opacity-0 h-0 group-hover:opacity-90 group-hover:h-full bg-[#0A0A0A] overflow-hidden duration-700 ">
            <h2 className='group-hover:-translate-y-8 text-[#00ff97] transition-[2s] mt-10 text-sm duration-700 ease-in-out'>{props.text} <FaExternalLinkAlt className='inline ml-2'/></h2>
            
        </div>
        </a>
    </div>
    </div>
  )
}

export default ProjCards
