import React from 'react'
import { useNavigate } from 'react-router-dom';

const ContactBody = () => {
    const navigate = useNavigate();
    const handleSubmit =(e) => {
        e.preventDefault();
        navigate('/')
    }
  return (
    <div>
        <div className='mx-4 md:mx-[360px] mb-[66px] md:mb-[188px]'>
            <h3 className='text-primary mt-16 md:mt-[156px] text-4xl font-semibold leading-10'>Contact Me</h3>
            <p className='text-secondary mt-4 md:mt-5 mb-12'>Hi there, contact me to ask me about anything you have in mind</p>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="fname" className='mb-1.5 text-label'>First name</label>
                        <input name='fname' id='fname' type="text" placeholder='Enter your first name' className='py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] text-primary placeholder:text-placeholder'/>
                        <div className="hidden mt-1.5 text-secondary">This is a hint text to help user.</div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="lname" className='mb-1.5 text-label'>Last name</label>
                        <input name='lname' id='lname' type="text" placeholder='Enter your last name' className='py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] text-primary placeholder:text-placeholder'/>
                        <div className="hidden mt-1.5 text-secondary">This is a hint text to help user.</div>
                    </div>
                </div>
                <div className='flex flex-col mt-6'>
                    <label htmlFor="email" className='mb-1.5 text-label'>Email</label>
                    <input name='email' id='email' type="email" placeholder='yourname@email.com' className='py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] text-primary placeholder:text-placeholder'/>
                    <div className="hidden mt-1.5 text-secondary">This is a hint text to help user.</div>
                </div>
                <div className='flex flex-col mt-6'>
                    <label htmlFor="message" className='mb-1.5 text-label'>Message</label>
                    <textarea name='message' id='message' placeholder="Send me a message and I'll reply you as soon as possible..." className='py-2.5 px-3.5 rounded-lg border border-[#D0D5DD] h-[108px] resize-none text-primary placeholder:text-placeholder'></textarea>
                    <div className="hidden mt-1.5 text-secondary">This is a hint text to help user.</div>
                </div>
                <div className='flex items-start mt-6'>
                    <input type="checkbox" id='agree' name='agree' className='border border-[#D0D5DD] mt-[5px] checkbox'/>
                    <label htmlFor="agree" className='mb-1.5 ml-3 text-label'>You agree to providing your data to Abdrahman who may contact you.</label>
                </div>
                <button type='submit' onClick={handleSubmit} className='bg-[#1570EF] hover:bg-[#175CD3] focus:bg-[#1570EF] disabled:bg-[#B2DDFF] text-white py-3 flex justify-center rounded-lg w-full mt-8'>Send message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactBody