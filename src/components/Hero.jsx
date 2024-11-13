import React, { useState } from 'react'
import Design from './Design'
import Modal from './Modal';
import Photographproj1 from '../assets/images/Photographproj1.jpeg'
import CODE from '../assets/images/code.jpeg'
import Productphot1 from '../assets/images/productphot1.jpeg'
import UIUX from '../assets/images/UIUX.jpeg'
import Searchmarket2 from '../assets/images/searchmarket2.jpeg'
import Blockchain3 from '../assets/images/Blockchain3.jpeg'
import CODE2 from '../assets/images/code2.jpeg'
import Photographproj2 from '../assets/images/Photographproj3.jpeg'
import Productphot2 from '../assets/images/productphot22.jpeg'
import Searchmarket1 from '../assets/images/Searchmarket1.jpeg'
import Swisstaler from '../assets/images/Swisstaler.jpeg'
import Pubadvert3 from '../assets/images/pubadvert3.jpeg'




const Hero = () => {

  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)
  const [showModal5, setShowModal5] = useState(false)
  const [showModal6, setShowModal6] = useState(false)


  // slider animation
  function revealer() {
    var revealss = document.querySelectorAll('.revealee');
  
    for (var i = 0; i < revealss.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealss[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealss[i].classList.add('active');
      } else {
        revealss[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealer);


  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if(hours < 12){
    timeOfDay = "MORNING"
  }
  else if(hours >= 12 && hours < 17){
    timeOfDay = "AFTERNOON"
  }
  else{
    timeOfDay = "EVENING"
  }

  const modalTxt =[
    {
        label: '1',
        mode: showModal2,
        setMode: setShowModal2,
        head: 'Web Development',
        imagee:CODE2,
        text: `This project focused on building responsive and functional websites to deliver an engaging online experience. The aim was to create a user-friendly design, implement robust features, and ensure compatibility across devices.

The process involved front-end and back-end development, optimizing site performance, and integrating essential tools for functionality. Attention was given to both design and code quality to ensure a seamless user experience.

The result was a high-performing website that effectively communicated the brand's message, enhanced user interaction, and supported business goals.`
    },

    {
        label: '2',
        mode: showModal,
        setMode:setShowModal,
        head: 'Photography Influencing',
        imagee:Photographproj2,
        text: `I focus on leveraging the power of social media influencers to connect brands with their target audiences through authentic content.
           Inspired by the growing impact of influencers, I developed strategies to identify the right partners, craft engaging campaigns, and execute personalized outreach. The process included setting goals, negotiating contracts,
            and collaborating to ensure content aligned with brand values. By using data-driven insights, I optimized campaign performance through metrics like engagement and conversion rates, continuously refining strategies for the best results.
             This highlighted the power of influencer marketing in building brand loyalty and driving meaningful connections.`
    },

    {
        label: '3',
        mode: showModal3,
        setMode:setShowModal3,
        head: 'Product Photography',
        imagee: Productphot2,
        text: `Creating high-quality product photos that highlight unique features and appeal to customers. By planning creative setups, using professional lighting,
           and refining images through editing, the goal is to produce visuals that elevate brand presentation and drive engagement.`
    },

    {
        label: '4',
        mode: showModal4,
        setMode:setShowModal4,
        head: 'Search Engine Marketing',
        imagee: Searchmarket1,
        text: `I work on leveraging search engine marketing (SEM) strategies to boost brand visibility and drive traffic to websites.
           The goal is to create targeted ad campaigns that appear on search engine results pages, reaching potential customers actively searching for relevant products or services.
          The process involved keyword research, creating compelling ad copy, setting up pay-per-click (PPC) campaigns, and optimizing landing pages for higher conversion rates.
          Continuous monitoring and data analysis allowed for refining the strategies to maximize return on investment (ROI) and achieve the best results.
          Overall, this project demonstrated the power of SEM in increasing brand visibility, attracting qualified leads, and driving business growth.`
    },

    {
        label: '5',
        mode: showModal5,
        setMode:setShowModal5,
        head: 'Brand Asset Development',
        imagee: Swisstaler,
        text: `The goal was to develop visual elements like logos, color schemes, typography, and marketing materials that establish a consistent brand image across all platforms.
          The process included researching the brand's target audience, crafting a unique design style, and producing assets that align with the brand's message. These elements were refined to ensure they resonate with customers and strengthen brand recognition.
          The result was a set of versatile and impactful brand assets that enhanced the brand's visibility and contributed to a unified and professional presence.`
    },
    {
        label: '6',
        mode:showModal6,
        setMode:setShowModal6,
        head: 'UI/UX Development',
        imagee: Pubadvert3,
        text: `I aimed to create user-friendly and visually appealing interfaces that enhance the overall user experience. The focus was on designing intuitive layouts, optimizing navigation,
           and ensuring consistency across digital platforms.
The process involved user research, wireframing, prototyping, and testing to refine designs based on user feedback. The goal was to improve usability, streamline interactions, and deliver a seamless digital experience.
The outcome was a well-designed interface that not only met user needs but also strengthened brand engagement through a cohesive and enjoyable user experience.`
    },


]


  return (
    <>
     <div className=' flex py-4 mb-7 sma:flex-col mda:flex-col justify-between items-end sma:items-start mda:items-start leading-6 text-white px-5'>
        <div className='mb-4'>
            <h1 className='text-[68px] font-normal sma:text-3xl mda:text-3xl font-Manrope leading-tight text-start'><span className='text-[#00ff97]'>GOOD {timeOfDay} EMPLOYER!</span><br /> 
            <span className=' sma:text-2xl mda:text-2xl uppercase'>I'm Sanni Olayinka </span><br />
            <span>A WEB DEVELOPER</span>
            </h1>
        </div>
        <div className='text-xl flex items-start font-Nunito gap-8 '>
          <a href="#" className='text-[#00ff97] text-lg hover:scale-105 transition flex gap-2 items-center'>PROJECTS <i className="fa-solid fa-arrow-trend-up"></i> </a>
          <a href="#" className='text-[#00ff97] text-lg hover:scale-105 transition flex gap-2 items-center'>INSIGHTS <i className="fa-solid fa-arrow-trend-up"></i> </a>
        </div>    
    </div> 
    <hr />

    <div className='text-white my-6 mb-10 revealee font-manrope px-4'>
      <h1 className='text-2xl uppercase tracking-wider mb-8 '>My Various Services</h1>
      <div className='grid place-items-center gap-4 mdaa:grid-cols-2 sma:grid-cols-2  mda:grid-cols-2 grid-cols-3'>
        <Design 
          img={Photographproj1}
          name="Influencer Marketing"
          onClick={() => setShowModal(true)}
        />
        <Design 
          img={CODE}
          name="Web Development"
          onClick={() => setShowModal2(true)}
        />
        <Design 
          img={Productphot1}
          name="Product Photography"
          onClick={() => setShowModal3(true)}
        />
          <Design
          img={UIUX}
          name="UI/UX Development"
          onClick={() => setShowModal6(true)}
          />
        <Design 
          img={Searchmarket2}
          name="Search Engine Marketing"
          onClick={() => setShowModal4(true)}
        />
        <Design 
        img={Blockchain3}
        name="Brand Asset Development"
        onClick={() => setShowModal5(true)}
        />

        
      </div>
        <div>
          {
            modalTxt.map((x) => (
              <div key={x.label}>
      <Modal isVisible={x.mode} 
      onClose={() => x.setMode(false)}>
        <img src= {x.imagee} loading='lazy' className='max-w-[200px] max-h-[250px] rounded-sm sma:w-[200px]' alt="" />
        <div>
          <h3 className='my-4 font-medium font-Anek'>{x.head}</h3>
          <h1 className='text-base font-normal font-Nunito'>{x.text}</h1>
        </div>
      </Modal>

              </div>
            ) )

          }

        </div>





    </div> <hr />
    </>
  )
}

export default Hero
