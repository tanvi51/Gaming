import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <div class="sm:flex items-center justify-between px-12 py-2 bg-white" >
          <div>
            <Link to="/"><img className='w-64 sm:w-32' src="./images/logo.png" alt="" />
            </Link>
          </div>
          <div className="flex items-center space-x-6 font-bold" >
          <Link to="/all-games" className="hover:text-red-500 cursor-pointer" >All Games</Link>
          </div>
          
      </div>
  )
}

export default NavBar