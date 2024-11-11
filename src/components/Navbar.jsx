import React, { useState } from 'react'
import CastroLogo from '../assets/images/compass.png'
import { FaBars } from 'react-icons/fa'
import {Link} from 'react-scroll'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <div className=' flex justify-between items-center px-4 lg:mb-40'>
     <div className=''>
        <a href="/index.html" className='flex justify-between gap-4 items-center'>
        <img 
        src={CastroLogo} 
        alt="Logo" 
        className='w-24 sma:w-16 mda:w-16 animate-[spin_5s_linear_infinite]' />

        <h1 className='text-3xl font-Anek text-[#00ff97]'>CASTRO</h1>
        </a>
    </div> 
    <div>
        <nav>
            
            <ul  className='hidden lg:flex xl:flex  text-white font-Nunito text-xl justify-around gap-8 items-center navigate'>
                <li className='hover:text-[#00ff97] cursor-pointer'><a href="/index.html">HOME</a></li>
                <li className='hover:text-[#00ff97] cursor-pointer'><Link to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link></li>
                <li className='hover:text-[#00ff97] cursor-pointer'><Link to="education" spy={true} smooth={true} offset={-70} duration={500}>EDUCATION</Link></li>
                <li className='hover:text-[#00ff97] cursor-pointer'><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECT</Link></li>
                <li className='hover:text-[#00ff97] cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link></li>
                
            </ul>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden xl:hidden text-[#00ff97] block'>
            <FaBars />
           </button>

          <div className={`absolute xl:hidden top-20 bg-black mt-4 left-0 w-full h-fit flex flex-col gap-5 transform transition-transform ${isMenuOpen ? "opacity-100" :"opacity-0"}`} 
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
          >

            <a href='/index.html' className='text-center bg-black text-white font-Nunito text-xl list-none transition-all'>HOME</a>
            <Link className='text-center bg-black text-white font-Nunito text-xl list-none transition-all' to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link>
            <Link className='text-center bg-black text-white font-Nunito text-xl list-none transition-all' to="education" spy={true} smooth={true} offset={-70} duration={500}>EDUCATION</Link>
            <Link className='text-center bg-black text-white font-Nunito text-xl list-none transition-all' to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECT</Link>
            <Link className='text-center bg-black text-white font-Nunito text-xl list-none transition-all' to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link>
          </div>

        </nav>
    </div>
    </div>
    </>
  )
}

export default Navbar
