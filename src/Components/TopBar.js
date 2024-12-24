import React from 'react'

export default function TopBar() {
  return (
    <div className='w-full h-12 flex flex-row bg-gradient-to-r items-center from-navtorRoyalBlue to-navtorDark'>
      <div className='text-lg text-white mx-5'><b>NavFleet</b> Performance</div>
      <div className='text-sm text-white mx-4 py-4 px-2 justify-self-center h-full hover:bg-navtorHoverGreen hover:cursor-pointer'><i className='fa fa-sign-out text-white px-2'></i>Go To Analytics</div>
    </div>
  )
}
