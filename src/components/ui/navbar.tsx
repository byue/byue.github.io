import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const tabData = [
  {tabName: 'Home', buttonId: 'homeButton', jumpId: 'home'},
  {tabName: 'About Us', buttonId: 'aboutUsButton', jumpId: 'aboutus'}, 
  {tabName: 'Services', buttonId: 'servicesButton', jumpId: 'services'}, 
  {tabName: 'Skills', buttonId: 'skillsButton', jumpId: 'skills'},
  {tabName: 'Contact', buttonId: 'contactButton', jumpId: 'contact'},
];

export const NavBar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="navbar_styling" 
      className={`relative w-full bg-black flex flex-col items-center justify-center rounded-md transition-opacity duration-500 z-40 ${
        isAtTop || isHovered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div id="nav_bar" className="justify-center flex flex-wrap justify-center space-x-4 fixed top-[2rem] z-40">
        {tabData.map((element, _) => 
        <button id={element.buttonId}
            onClick={()=> scrollTo(
              '#' + element.jumpId,
              element.jumpId === 'aboutus' || element.jumpId === 'services' ? 'center' : 'start',
            )}
            className="flex-auto text-white bg-black min-w-fit relative h-[50px] sm:w-[5rem] md:w-[7rem] lg:w-[12rem] overflow-hidden rounded-full border-2 border-[#616467] px-3 text-white uppercase
                            font-light shadow-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:bg-sky-500 before:transition-all 
                            before:duration-300 hover:text-white hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 sm:xs md:text-sm lg:text-2xl xl:text-2xl">{element.tabName}</span>
        </button>
        )}
      </div>
    </div>
  );
};
