import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-gradient-to-r from-primary to-white italic z-20'>
        <div className='text-secondary text-5xl font-serif animate-flicker'>
            <h1>WELCOME</h1>
        </div>
    </div>
  )
}

export default Loader