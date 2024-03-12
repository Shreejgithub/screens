import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBell,
  faCircle,
  faPlus,
  faQuestion,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  return (
    
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left section (empty for now) */}
      <div></div>

      {/* Center section (search bar) */}
      <div className="flex justify-center ">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white px-4 py-2 w-60 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
        />
      </div>

      {/* Right section (elements shown by logos) */}
      <div className="flex items-center">
        {/* Add your logo elements here */}
        <ul className="flex p-0 m-0">
          <li href="#" className="text-white hover:text-gray-400 mx-2">
            User Name | Workspace
          </li>

          <li href="#" className="text-white hover:text-gray-400 mx-2">
            <FontAwesomeIcon icon={faCircle} />
          </li>

          <li href="#" className="text-white hover:text-gray-400 mx-2">
            <FontAwesomeIcon icon={faPlus} />
          </li>

          <li href="#" className="text-white hover:text-gray-400 mx-2">
            <FontAwesomeIcon icon={faQuestion} />
          </li>

          <li href="#" className="text-white hover:text-gray-400 mx-2">
            <FontAwesomeIcon icon={faBell} className="mr-1" />
          </li>

          <li href="#" className="text-white hover:text-gray-400 mx-2">
            <FontAwesomeIcon icon={faTableCells} className="mr-1" />
          </li>

          <li href="#" className="text-white hover:text-gray-400 mx-2">
            <FontAwesomeIcon icon={faGear} className="mr-1" />
          </li>
        </ul>
        {/* Add more logo elements as needed */}
      </div>
    </nav>
  )
}

export default Header
