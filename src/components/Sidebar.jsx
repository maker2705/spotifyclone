import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri'
import { HiOutlineMenu } from "react-icons/hi";

import { FaSpotify } from "react-icons/fa";
import { links } from '../assets/constants'


const Sidebar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const NavLinks = ( {handleClick} ) => (
      <div className="mt-10 " >
        {
          links.map( (item) => (
            <NavLink 
            to={item.to}
            key={item.name}
            className="flex flex-row justify-start items-center
             my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 " 
            onClick={ () => handleClick && handleClick() } 
             >
             <item.icon className="w-6 h-6 mr-2"/>
              {item.name}
            </NavLink>
          ) )
        
        }
      </div>
  )
  return(
    <>
      <div className="md:flex hidden flex-col py-10 px-4 bg-[#191624] w-[240px] " >
        <FaSpotify className="w-full h-14 object-contain text-green-600 " />
        <h2 className=' flex justify-center font-bold text-xl text-white text-left ' >Spotify 2.0</h2>
        <NavLinks/>
      </div>
      <div className="absolute md:hidden block top-6 right-3  " >
          {sideMenuOpen ? (
            <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={ () => setSideMenuOpen(false) } />
          ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={ () => setSideMenuOpen(true) } /> }
      </div>
      
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl 
      from-white/10 to-[#483d8b] backdrop-blur-lg 
      z-10 p-6 md:hidden smooth-transition ${sideMenuOpen ? 'left-0' : '-left-full' } ` } >
      
        <FaSpotify className="w-full h-14 object-contain text-green-600 " />
        <h2 className=' flex justify-center font-bold text-xl text-white text-left ' >Spotify 2.0</h2>
        <NavLinks handleClick={() => setSideMenuOpen(false) } />
      </div>

    </>
  )
};

export default Sidebar;
