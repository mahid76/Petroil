import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[1139px] mx-auto  '>
      {children}
    </div>
  )
}

export default Container
