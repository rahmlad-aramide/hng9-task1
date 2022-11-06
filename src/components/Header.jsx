import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <header className="flex justify-center flex-col items-center my-8 pt-8 md:pt-0 md:my-16 mx-4 md:mx-[9rem] relative">
      <div title='Share Link'
        className="hidden md:flex absolute -top-5 right-[208px] cursor-pointer transition duration-200 hover:opacity-70 rounded-full hover:shadow-md"
        onClick={handleNavigate}
      >
        <img src="share.svg" alt="share button" className="w-10" />{" "}
      </div>
      <div className="flex md:hidden absolute top-3 right-0">
        <img src="share_mobile.svg" alt="share button" className="w-10" />{" "}
      </div>
      <div>
        <img
          id="profile__img"
          src="img.png"
          alt="Abdrahmman"
          className="rounded-full w-[5.5rem]"
        />
      </div>
      <div className="text-[1.25rem] text-[#101828] font-bold mt-6">
        Abdrahman Oladimeji
      </div>
    </header>
  );
}

export default Header