import React from 'react'

const Body = () => {
  return (
    <div className='flex flex-col justify-center mt-8'>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6'><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/Rahmlad/' id='linkedin'>LinkedIn Link</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6'><a target='_blank' rel="noreferrer" href='https://twitter.com/Dev_Rahmlad' id='twitter'>Twitter Link</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6'><a target='_blank' rel="noreferrer" href='https://github.com/rahmlad-aramide' id='github'>Github Link</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6 hidden'><a target='_blank' rel="noreferrer" href='https://hng9.slack.com/team/U048M0TU7GA' id='slack'>Slack</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='btn__zuri'><a target='_blank' rel="noreferrer" href='https://facebook.com/abdrahman.oladimeji.aramide/'>Facebook Link</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='books'><a target='_blank' rel="noreferrer" href='https://abdrahman-oladimeji.web.app/wa.me/2349023600083'>WhatsApp Link</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='book__python'><a target='_blank' rel="noreferrer" href='https://instagram.com/rahmlad'>Instagram Link</a></div>
      <div className='flex justify-center mt-6 mb-16 mx-0 md:mx-[112px]'>
        <img src="slack.svg" alt="Slack" className='w-6 mr-3 my-6'/>
        <img src="github.svg" alt="Github" className='w-6 ml-3 my-6'/>
      </div>
    </div>
  )
}

export default Body