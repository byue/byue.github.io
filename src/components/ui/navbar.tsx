import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const tabData = [
  {tabName: 'Home', buttonId: 'homeButton', jumpId: 'home'},
  {tabName: 'About Us', buttonId: 'aboutUsButton', jumpId: 'aboutus'}, 
  {tabName: 'Services', buttonId: 'servicesButton', jumpId: 'services'}, 
  {tabName: 'Skills', buttonId: 'skillsButton', jumpId: 'skills'},
  {tabName: 'Contact', buttonId: 'contactButton', jumpId: 'contact'},
];

export const NavBar = () => {
  return (
    <div id="navbar_styling" className="relative w-full bg-black flex flex-col items-center justify-center  rounded-md">
        <div id="nav_bar" className="justify-center flex flex-wrap justify-center space-x-4 fixed top-[2rem] z-40">
            {tabData.map((element, _) => 
            <button id={element.buttonId}
                onClick={()=> scrollTo('#' + element.jumpId, element.jumpId === 'aboutus' ? 'center' : 'start')}
                className="flex-auto text-white bg-black min-w-fit relative h-[50px] sm:w-[5rem] md:w-[7rem] lg:w-[12rem] overflow-hidden rounded-full border-2 border-[#616467] px-3 text-white uppercase
                                font-light shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:bg-sky-500 before:transition-all 
                                before:duration-300 hover:text-white hover:shadow-sky-500 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10 sm:xs md:text-sm lg:text-2xl xl:text-2xl">{element.tabName}</span>
            </button>
            )}
        </div>
    </div>
  );
};
