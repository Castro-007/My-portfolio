import React from 'react'

const Skills = (props) => {
  return (
    <div>
      <div className="opacity-20 hover:opacity-100 transition-[.3s] cursor-pointer ">
            <img src={props.skillimg} className='pb-4 w-[150px] opacity-200' alt="" />
            <p className='text-center text-xl font-Nunito uppercase font-semibold '>{props.skilltxt}</p>
          </div>
    </div>
  )
}

export default Skills
