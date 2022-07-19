import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
      <div className="">
          <img className="h-full md:h-screen w-full" src="./images/banner.jpg" alt="" />
          <div className="absolute top-1/4 sm:top-1/3 md:top-1/2 left-12 text-white space-y-4">
              <p className="text-4xl md:text-7xl font-bold">Gaming</p>
              <Link to="/all-games">
              <p className="py-2 my-2 px-4 w-36 flex items-center justify-center cursor-pointer text-black font-bold bg-cyan-400 rounded hover:bg-cyan-600">All Games</p>
              </Link>
          </div>
      </div>
  )
}

export default Hero