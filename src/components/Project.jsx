import React from 'react'
import ProjCards from './ProjCards'
import Mirae from '../assets/images/miraeasset.png'
import LOPUBLI from '../assets/images/lopubli.png'
import Topklan from '../assets/images/Topklan.png'
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
          imgs= {Topklan}
          link ="https://topklan.onrender.com/"
          text ="TOPKLAN ENGINEERING SERVICES - Built a Website for Topklan Engineering services using react, tailwind, nodejs. This provides information on Engineering services and products they offer."
          />
          <ProjCards
          imgs= {Mirae}
          link ="https://mirae-asset.onrender.com/"
          text ="MiRAE ASSET - Built a smaple Landing page for Mirae Asset that provides information on financial services and products"
          />
          <ProjCards
          imgs={LOPUBLI}
          link ="https://lopubliication.onrender.com/"
          text ="LOPUBLICATIONS - PUBLISHING WEBSITE "
          />
          <ProjCards
          imgs={RETAIL}
          link ="https://retailall.onrender.com/"
          text ="RETAIL&ALL - A Fashion e-commerce webapp that elevates fashion"
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
