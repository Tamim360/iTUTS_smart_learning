import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCode , FaAngleRight} from "react-icons/fa";
import js from '../../../assets/js.png'
import node from '../../../assets/nodejs.png'

const CourseCategory = () => {
  const [isOpen, setIsOpen] = useState(true)
  const menus = [
    {
      name: 'JavaScript',
      src: js
    },
    {
      name: 'NodeJS',
      src: node
    }
  ]
  return (
    <div className={`${isOpen ? "w-72" : "w-16"} duration-300 bg-violet-700 h-screen p-4 pt-6 relative`}
    >

      <FaAngleRight className={`duration-500 text-xl font-bold bg-white rounded-full absolute -right-3 top-8 border border-slate-900 ${isOpen && 'rotate-180'} cursor-pointer`}
      onClick={()=> setIsOpen(!isOpen)}
      />

      <NavLink className="flex items-center">
        <img
          className={`invert w-8 duration-300 ${!isOpen && 'rotate-180'}`}
          src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png"
          alt="" />
        <h2 className={`ml-2 text-2xl font-bold text-white duration-300 ${!isOpen && 'scale-0'}`}>iTUTS</h2>
      </NavLink>

      <ul className="mt-6">
      {
        menus.map((menu, index) => {
          return (
            <li key={index}>
              <NavLink className="flex gap-x-2 mb-2 items-center">
              <img className="w-8 rounded-full" src={`${menu.src}`} alt="" />
              <h2 className={`text-lg text-white font-bold duration-300 ${!isOpen && 'scale-0'}`}>{menu.name}</h2>
            </NavLink>
            </li>
          )
        })
      }
      </ul>
      
    </div>
  );
};

export default CourseCategory;
