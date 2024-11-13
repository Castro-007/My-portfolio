import React from 'react'
import Contact from './Contact'
import Skills from './Skills'
import Accordion from './Accordion'
import Project from './Project'
import Html5 from '../assets/images/html-5.png'
import CSS3 from '../assets/images/css-3.png'
import DAISYUI from '../assets/images/daisyui_.png'
import JAVASCRIPT from '../assets/images/js.png'
import TAILWIND from '../assets/images/tailwindcss_ .png'
import REACT from '../assets/images/react.svg'
import NODEJS from '../assets/images/nodejs.png'
import Cv from '../assets/cvfolder/sanniolayinkaresume11.pdf'

const MainHero = () => {
  function relive() {
    var revear = document.querySelectorAll('.revealer');
  
    for (var i = 0; i < revear.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revear[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revear[i].classList.add('active');
      } else {
        revear[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', relive);

  return (
    <div>
      <div id='about'>

      <div className='flex sma:flex-col mda:flex-col justify-around revealer py-5 mb-5 mt-8 text-start'>
        <div className='basis-[30%] sma:mb-3 mda:mb-3'>
        <h1 className='text-2xl font-Nunito mb-8 font text-start self-start'>GET TO KNOW ME </h1>
        <a href={Cv} className='lg:pt-8 ' download="cv portfolio">
              <button className='relative px-8 sma:px-2 py-2 rounded-md bg-transparent isolation-auto  z-10 border-2 border-blue-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700' type="submit">Download My CV!</button>
        </a>
        </div>
        <div className='basis-[40%] font-nunito '>
            <h3 className='text-[#00ff97] font-Nunito text-xl mb-8'>My Journey</h3>
            <p className='font-Nunito leading-6'>My Journey into the World of web development and tech started with a curiosity to know how the internet and web works and a deeper vision into the space. I started experimenting with HTML & CSS, gradually i started using TailwindCss as a CSS framework alongside bootstrap. I then dived into Javascript to bring interactivity and dynamism to Projects. As my skill keeps evolving, i continue to explore and learn various frame works like React to build modern single-page applications and nodejs to build server-side applications.<br/> I have 3years+ experience in web development, and the journey never stops but keeps getting more adventurous.</p>
        </div>
      </div> <hr />
      <div className='flex justify-around revealer py-5 text-start mt-8 mb-6 sma:flex-col mda:flex-col'>
        <h3 className='text-2xl font-Nunito uppercase font text-start basis-[30%] self-start'>Why I Exist</h3>
        <div className='basis-[40%] font-Nunito'>
          <h3 className='text-[#00ff97] font-Nunito text-xl lg:mb-8 sma:py-4 mda:py-4'>My Passion For Success</h3>
          <p className='leading-6'>I excel in turning ideas into reality through clean and efficient coding. Whether it's designing intuitive user interfaces or optimizing website performance. I embrace the challenges that comes with creating exceptional online experiences and make turn into a satisfactory experience for my clients and users, so to have a seemingly exciting journey while surfing the web.</p>
        </div>
      </div> <hr />
      <div className='my-7 revealee'>
        <h2 className='uppercase font-Nunito text-3xl my-5'>What I Believe in</h2>
        <div className='grid grid-flow-col justify-around gap-5 p-4 overflow-x-scroll believe-cont'>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Client Satisfaction</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Creativity</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Integrity</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Team Work</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Adaptability</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Collaboration</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Results Driven</h1>
          </div>
          <div className='w-[250px] h-[200px] cursor-pointer flex items-end hover:bg-[#00ff97] hover:-translate-y-3 group transition-[.3s]  py-4 px-2 bg-slate-700 rounded-lg '>
              <h1 className='align-text-bottom group-hover:text-black'>Innovative Excellence</h1>
          </div>
        </div>
      </div> <hr />
      </div>
      <div className='my-7' id='education'>
        <div className='flex justify-around items-start sma:flex-col mda:flex-col mb-7'> 
            <h2 className='uppercase font-Nunito text-3xl align-text-top block my-5'>EDUCATIONAL QUALIFICATIONS</h2>
          <div className='text-start basis-[40%]'>
            <div className='mt-5'>
            <Accordion 
            head='UNIVERSITY OF ILORIN'
            answer='Bsc. Criminology & Security Studies'

            />
            <Accordion 
            head='NEW HORIZON'
            answer='Certificate in Frontend Web Development'
            />
            <Accordion 
            head='SPEED UP LAGOS'
            answer='Certificate in Digital Marketing'
            />
            
            </div>
          </div>
        </div> <hr />
      </div>

      

      <div className='pt-7 mb-4 '>
        <h3 className='text-3xl font-Nunito pl-8 uppercase'>My Skills</h3>

        <div className='overflow-x-scroll flex lg:justify-center gap-10 py-4 items-center px-6'>
          <Skills
          skillimg={Html5}
          skilltxt="HTML5"
          /> 
          <Skills
          skillimg={CSS3}
          skilltxt="CSS3"
          />
          <div className="opacity-20 hover:opacity-100 transition-[.3s] cursor-pointer bg-white p-4 text-black">
            <img src={DAISYUI} className='pb-4 w-[100px] opacity-200' alt="" />
            <p className='text-center text-xl font-Nunito uppercase font-semibold '>DaisyUI</p>
          </div>
          <Skills
          skillimg={JAVASCRIPT}
          skilltxt="Javascript"
          />
          <Skills
          skillimg={TAILWIND}
          skilltxt="tailwindcss"
          />
          <Skills
          skillimg={REACT}
          skilltxt="react"
          />
          <Skills
          skillimg={NODEJS}
          skilltxt="Nodejs"
          />
        </div>
      </div> <hr />
      <Project /> <hr />
      <Contact/>
    </div>
  )
}

export default MainHero
