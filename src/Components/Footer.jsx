import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[196px] md:160px py-4 flex justify-start md:justify-center'>
        <div className='flex flex-col md:flex-row justify-between my-8 pt-0 md:pt-8 ml-4 md:ml-28 md:my-12 mx-0 md:mr-28 w-full'>
          <div className='mb-4 md:mb-0'>
              <img src="zuri.svg" alt="Zuri" />
          </div>
          <div className='text-gray-500 mb-4 md:mb-0 mx-0 md:mx-8'>HNG Internship 9 Frontend Task</div>
          <div className='mb-4 md:mb-0'>
            <img src="I4G.svg" alt="I4G" />
          </div>
        </div>
    </footer>
  )
}

export default Footer