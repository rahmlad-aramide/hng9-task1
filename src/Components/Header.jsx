import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-center flex-col items-center my-8 pt-8 md:pt-0 md:my-16 mx-4 md:mx-[9rem]'>
        <div><img id='profile__img' src="img.png" alt="Abdrahmman" className='rounded-full w-[5.5rem]' /></div>
        <div className='text-[1.25rem] text-[#101828] font-bold mt-6'>Abdrahman Oladimeji</div>
    </header>
  )
}

export default Header