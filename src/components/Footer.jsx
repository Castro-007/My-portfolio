import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#FFFFFF] text-black pt-4 pb-5'>
        <h1 className='text-[120px] sma:text-4xl mda:text-4xl text-center mb-8 font-medium font-manrope'>Connect with me</h1>

      <div className='flex justify-around sma:flex-col sma:px-4 mda:px-4 mda:flex-col items-end sma:items-start mda:items-start'>
        <div className='basis-[40%] mb-5 font-Nunito'>
          <form className='flex sma:flex-col mda:flex-col sma:gap-5 mda:gap-5 gap-8 items-end sma:items-start mda:items-start'>
            <span>
          <label htmlFor="email" className='block font-extralight text-lg'>Email</label>
          <input type="email" name="email" className='border-black border-[1px] h-9 px-1 w-[300px] rounded-lg' id="" />
            </span>
          <button type="submit" className='bg-black text-white h-12 items-end sma:items-start mda:items-start w-20 rounded-lg hover:bg-[#00A362] transition-[.3s] font-Nunito '>Submit</button>

          </form>
        </div>
        <div className='flex justify-around sma:flex-col mda:flex-col items-start gap-8'>
          <div className='leading-8'>
            <p className='font-manrope font-light text-base'>15, Terry Radsburyy Road,<br/> Lagos, Nigeria.</p>
            <p className='font-manrope font-light text-base'>Sanniolayinka007@gmail.com</p>
            <form action="09015251414" className='mt-5'>
                            <button className='bg-black text-white p-2 rounded-lg hover:bg-[#00A362] transition-[.3s]' type="submit"><a href="tel:+2349015251414">Book a Call</a></button>
                        </form>
          </div>
          <div className='leading-8'>
            <a href='https://github.com/Castro-007' target='_blank' className='font-manrope font-light hover:text-[#00B86E] transition-[.3s] block text-base'>Github</a>
            <a href='https://www.reddit.com/u/CastroOO7/s/MHJBA0lMfO' target='_blank' className='font-manrope font-light hover:text-[#00B86E] transition-[.3s] block text-base'>Reddit</a>
            <a href='https://www.linkedin.com/in/sanni-olayinka-8ab944294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank' className='font-manrope font-light hover:text-[#00B86E] transition-[.3s] block text-base'>LinkedIn</a>
            <a href='https://twitter.com/yk_westt' target='_blank' className='font-manrope font-light hover:text-[#00B86E] transition-[.3s] block text-base'>Twitter</a>
            
          </div>
          <div className='leading-8'>
            <p className='font-manrope font-light text-base'>Privacy</p>
            <p className='font-manrope font-light text-base'>Terms & Condition</p>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer 
