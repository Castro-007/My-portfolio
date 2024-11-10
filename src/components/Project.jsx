import React from 'react'
import ProjCards from './ProjCards'

const Project = () => {

  return (
    <div id='projects'>
        <div className='py-5'>
      <h1 className='uppercase text-3xl font-Nunito my-4'>My Projects</h1>
      <div className='grid grid-cols-3 sma:grid-cols-2 items-center justify-center mda:grid-cols-2'>

        

          <ProjCards
          imgs="./src/assets/images/eliteshott1.png"
          link ="#"
          text ="ELITESTACK - Crypto Trading Platform"
          />
          <ProjCards
          imgs="./src/assets/images/lopubli.png"
          link ="https://lopublication.onrender.com/"
          text ="LOPUBLICATIONS - PUBLISHING WEBPAGE"
          />
          <ProjCards
          imgs="./src/assets/images/retailssa.png"
          link ="https://retailandall.onrender.com/"
          text ="RETAIL&ALL - An e-commerce webpage that elevates fashion"
          />
          <ProjCards
          imgs="./src/assets/images/jsclock.png"
          link ="https://javascript-clock-lilac.vercel.app/"
          text ="JAVASCRIPT CLOCK - A Javascript Clock that works with the local time and auto-changes text whenever the period of time changes from sunrise to sunset "
          />
        
      </div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default Project
