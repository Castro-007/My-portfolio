import React, { useState } from 'react'
import Design from './Design'
import Modal from './Modal';

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

  return (
    < >
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
      <h1 className='text-2xl uppercase mb-8 '>My Various Services</h1>
      <div className='grid place-items-center gap-4 mdaa:grid-cols-2 sma:grid-cols-2  mda:grid-cols-2 grid-cols-3'>
        <Design 
          img="./src/assets/images/photographproj1.jpeg"
          name="Influencer Marketing"
          onClick={() => setShowModal(true)}
        />
        <Design 
          img="./src/assets/images/code.jpeg"
          name="Web Development"
          onClick={() => setShowModal2(true)}
        />
        <Design 
          img="./src/assets/images/productphot1.jpeg"
          name="Product Photography"
          onClick={() => setShowModal3(true)}
        />
          <Design
          img="./src/assets/images/UIUX.jpeg"
          name="UI/UX Development"
          onClick={() => setShowModal6(true)}
          />
        <Design 
          img="./src/assets/images/searchmarket2.jpeg"
          name="Search Engine Marketing"
          onClick={() => setShowModal4(true)}
        />
        <Design 
        img="./src/assets/images/Blockchain3.jpeg"
        name="Brand Asset Development"
        onClick={() => setShowModal5(true)}
        />

        
      </div>
      <Modal isVisible={showModal2} 
      onClose={() => setShowModal2(false)}>
        <img src="./src/assets/images/code2.jpeg" loading='lazy' className='max-w-[200px] max-h-[250px] rounded-sm sma:w-[200px]' alt="" />
        <div>
        <h3 className='my-4 font-medium font-Anek'>Web Development</h3>
        <h1 className='text-base font-normal font-Nunito'>This project focused on building responsive and functional websites to deliver an engaging online experience. The aim was to create a user-friendly design, implement robust features, and ensure compatibility across devices.

The process involved front-end and back-end development, optimizing site performance, and integrating essential tools for functionality. Attention was given to both design and code quality to ensure a seamless user experience.

The result was a high-performing website that effectively communicated the brand's message, enhanced user interaction, and supported business goals.</h1>

        </div>
      </Modal>


      <Modal isVisible={showModal} 
      onClose={() => setShowModal(false)}>
        <img src="./src/assets/images/photographproj2.jpeg" loading='lazy' className='max-w-[200px] max-h-[250px] rounded-sm sma:w-[200px]' alt="" />
        <div>
        <h3 className='my-4 font-medium font-Anek'>Photography Influencing</h3>
        <h1 className='text-base font-normal font-Nunito'>I focus on leveraging the power of social media influencers to connect brands with their target audiences through authentic content.
           Inspired by the growing impact of influencers, I developed strategies to identify the right partners, craft engaging campaigns, and execute personalized outreach. The process included setting goals, negotiating contracts,
            and collaborating to ensure content aligned with brand values. By using data-driven insights, I optimized campaign performance through metrics like engagement and conversion rates, continuously refining strategies for the best results.
             This highlighted the power of influencer marketing in building brand loyalty and driving meaningful connections.</h1>

        </div>
      </Modal>
      <Modal isVisible={showModal3} 
      onClose={() => setShowModal3(false)}>
        <img src="./src/assets/images/productphot22.jpeg" loading='lazy' className='max-w-[200px] max-h-[250px] rounded-sm sma:w-[200px]' alt="" />
        <div>
        <h3 className='my-4 font-medium font-Anek'>Product Photography</h3>
        <h1 className='text-base font-normal font-Nunito'> Creating high-quality product photos that highlight unique features and appeal to customers. By planning creative setups, using professional lighting,
           and refining images through editing, the goal is to produce visuals that elevate brand presentation and drive engagement.</h1>

        </div>
      </Modal>

      <Modal isVisible={showModal4} 
      onClose={() => setShowModal4(false)}>
        <img src="./src/assets/images/searchmarket1.jpeg" loading='lazy' className='max-w-[200px] max-h-[250px] rounded-sm sma:w-[200px]' alt="" />
        <div>
        <h3 className='my-4 font-medium font-Anek'>Search Engine Marketing</h3>
        <h1 className='text-base font-normal font-Nunito'>I work on leveraging search engine marketing (SEM) strategies to boost brand visibility and drive traffic to websites.
           The goal is to create targeted ad campaigns that appear on search engine results pages, reaching potential customers actively searching for relevant products or services.
          The process involved keyword research, creating compelling ad copy, setting up pay-per-click (PPC) campaigns, and optimizing landing pages for higher conversion rates.
          Continuous monitoring and data analysis allowed for refining the strategies to maximize return on investment (ROI) and achieve the best results.
          Overall, this project demonstrated the power of SEM in increasing brand visibility, attracting qualified leads, and driving business growth.</h1>


        </div>
      </Modal>
      <Modal isVisible={showModal5} 
      onClose={() => setShowModal5(false)}>
        <img src="./src/assets/images/Swisstaler.jpeg" className='w-[250px] max-w-[200px] max-h-[250px]  rounded-sm sma:w-[200px]' alt="" />
        <div>
        <h3 className='my-4 font-medium font-Anek'>Brand Asset Development</h3>
        <h1 className='text-base font-normal font-Nunito'>The goal was to develop visual elements like logos, color schemes, typography, and marketing materials that establish a consistent brand image across all platforms.
          The process included researching the brand's target audience, crafting a unique design style, and producing assets that align with the brand's message. These elements were refined to ensure they resonate with customers and strengthen brand recognition.
          The result was a set of versatile and impactful brand assets that enhanced the brand's visibility and contributed to a unified and professional presence.</h1>

        </div>
      </Modal>
      <Modal isVisible={showModal6} 
      onClose={() => setShowModal6(false)}>
        <img src="./src/assets/images/pubadvert3.jpeg" loading='lazy' className='max-w-[200px] max-h-[250px]  rounded-sm sma:w-[200px]' alt="" />
        <div>
        <h3 className='my-4 font-medium font-Anek'>UI/UX Development</h3>
        <h1 className='text-base font-normal font-Nunito'>I aimed to create user-friendly and visually appealing interfaces that enhance the overall user experience. The focus was on designing intuitive layouts, optimizing navigation,
           and ensuring consistency across digital platforms.
The process involved user research, wireframing, prototyping, and testing to refine designs based on user feedback. The goal was to improve usability, streamline interactions, and deliver a seamless digital experience.
The outcome was a well-designed interface that not only met user needs but also strengthened brand engagement through a cohesive and enjoyable user experience.</h1>

        </div>
      </Modal>


    </div> <hr />
    </>
  )
}

export default Hero
