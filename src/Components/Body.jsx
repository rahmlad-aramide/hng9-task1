import React from 'react'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex flex-col justify-center mt-8'>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6'><a target='_blank' href='https://twitter.com/Dev_Rahmlad' id='twitter'>Twitter Link</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6 hidden'><a target='_blank' href='app.slack.com/' id='slack'>Slack</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='btn__zuri'><a target='_blank' href='training.zuri.team'>Zuri Team</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='books'><a target='_blank' href='books.zuri.team'>Zuri Books</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='book__python'><a target='_blank' href='https://books.zuri.team/python-for-beginners?ref_id=Rahmlad'>Python Books</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem] mb-6' id='pitch'><a target='_blank' href='background.zuri.team'>Background Check for Coders</a></div>
        <div className='text-center bg-[#EAECF0] text-[#101828] font-Inter font-medium text-lg py-6 mx-4 md:mx-[9rem]' id='book__design'><a target='_blank' href='books.zuri.team/design-rules'>Design Books</a></div>
      <div className='flex justify-center mt-6 mb-16 mx-0 md:mx-[112px]'>
        <img src="slack.svg" alt="Slack" className='w-6 mr-3 my-6'/>
        <img src="github.svg" alt="Github" className='w-6 ml-3 my-6'/>
      </div>
    </div>
  )
}

export default Body