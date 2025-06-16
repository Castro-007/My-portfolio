import React from 'react'
import ProjCards from './ProjCards'
import ELITE from '../assets/images/eliteshott1.png'
import LOPUBLI from '../assets/images/lopubli.png'
import RETAIL from '../assets/images/Retailallhome.png'
import JSCLOCK from '../assets/images/jsclock.png'
import Nike from '../assets/images/Nikeabout.png'
const Project = () => {

  return (
    <div id='projects'>
        <div className='py-5'>
      <h1 className='uppercase text-3xl font-Nunito my-4'>My Projects</h1>
      <div className='grid grid-cols-3 sma:grid-cols-2 items-center justify-center mda:grid-cols-2'>

        

          <ProjCards
          imgs= ""
          link =""
          text =""
          />
          <ProjCards
          imgs={LOPUBLI}
          link ="https://lopubliication.onrender.com/"
          text ="LOPUBLICATIONS - PUBLISHING WEBPAGE"
          />
          <ProjCards
          imgs={RETAIL}
          link ="https://retailall.onrender.com/"
          text ="RETAIL&ALL - An e-commerce webpage that elevates fashion"
          />
          <ProjCards
          imgs={Nike}
          link ="https://nikeokeke-fe72.onrender.com/"
          text ="An Author Webpage for Nike Okeke where she shares her stories and works to the world "
          />
          <ProjCards
          imgs={JSCLOCK}
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
