import React from 'react'
import Button from './Button'
import Swal from 'sweetalert2'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2462193b-53ac-47a8-8ba5-c355f34a67c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    event.target.reset();
    setResult("");
    }
    else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='pt-7' id='contact'>
      <div className="flex justify-between sma:overflow-x-scroll mda:overflow-x-scroll sma:flex-col mda:flex-col  py-5 items-start">
        <div className='sma:mb-7 mda:mb-7'>
          <h1 className='font-Nunito text-3xl '>CONTACT ME</h1>
        </div>
        <div className='basis-[40%] '>
          <form onSubmit={onSubmit} id='form'>

            <div className='mb-5 flex  justify-around gap-5'>
            <div>
            <label htmlFor="Name" className='block mb text-lg w-full font-Anek'>First Name</label>
            <input type="text" name="firstName" className='rounded-lg border-[1px] border-[#00ff97] h-[35px] bg-transparent outline-1  px-2 py-1 ' id="" />
            </div>

            <div>
            <label htmlFor="Name" className='block mb text-lg w-full font-Anek'>Last Name</label>
            <input type="text" name="lastName" className='rounded-lg border-[1px] border-[#00ff97] h-[35px] bg-transparent outline-1  px-2 py-1 ' id="" />
            </div>
            </div>

            <div className='flex justify-around gap-5 '>
            <div>
            <label htmlFor="Name" className='block mb text-lg  font-Anek'>Email</label>
            <input type="email" name="email" className='rounded-lg border-[1px] border-[#00ff97] h-[35px] bg-transparent outline-1  px-2 py-1 ' id="" />
            </div>
            <div>
            <label htmlFor="Name" className='block mb text-lg  font-Anek'>Phone</label>
            <input type="tel" name="Phonenumber" className='rounded-lg border-[1px] border-[#00ff97] h-[35px] bg-transparent outline-1  px-2 py-1 ' id="" />
            </div>
            </div>

            <div className='my-7 ml-4'>
            <label htmlFor="Name" className='block mb text-lg  font-Anek'>Message</label>
            <textarea type="text" name="message" cols={20} rows={8} className='resize-none rounded-lg border-[1px] border-[#00ff97] w-full h-full bg-transparent outline-1  px-2 py-1 ' id="" />
            </div>
            <Button />
            
          </form>
        </div>
      </div> <hr/>
    </div>
  )
}

export default Contact
