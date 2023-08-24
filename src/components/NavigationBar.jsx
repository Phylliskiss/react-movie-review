/* eslint-disable no-unused-vars */
import React from 'react'

function NavigationBar() {
  return (
    <>
      <nav className='flex p-5'>
        <h1> IMD</h1>
        <ul className='flex gap-2 ms-auto'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavigationBar
