import React from 'react'

function Footer() {
  return (
    <footer className='mt-24 lg:mt-0 py-10'>
        <div className='h-[2px] w-5/6 bg-gradient-to-r from-secondary to-primary'>

        </div>

        <div className='flex flex-col w-5/6 mt-10 items-center justify-center'>
            <h1 className="text-white">
                Design and Developer By
            </h1>
            <h1 className="text-secondary text-xl italic">
                <span>{"<"}Furkan Soylu{">"}</span>
            </h1>
        </div>
    </footer>
  )
}

export default Footer