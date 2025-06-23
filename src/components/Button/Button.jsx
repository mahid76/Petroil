import React from 'react'

const Button = ({children}) => {
  return (
   <button className='bg-primary py-[14px] px-10  text-white'>
    {children}
   </button>
  )
}

export default Button
