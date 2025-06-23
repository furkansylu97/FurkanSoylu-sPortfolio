import React from 'react'
import { Link } from 'react-router-dom'
import FurkanSoylu from '../images/FurkanSoylu.svg'

function Header() {
  return (
    <div className='flex justify-center items-center p-5 bg-primary h-36'>
      <div>
        <Link to='/'>
          <img className='h-36 w-full animate-flicker drop-shadow-[0_0_10px_#02fced]' src={ FurkanSoylu } alt="Furkan Soylu" />
        </Link>
      </div>
    </div>
  )
}

export default Header