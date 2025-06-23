import React from 'react'
import Container from '../Layout/Container'
import collab01 from '../../assets/collab01.png'
import collab02 from '../../assets/collab02.png'
import collab03 from '../../assets/collab03.png'
import collab04 from '../../assets/collab04.png'

const Collab = () => {
  return (
    <div className='py-[117px]'>
      <Container>
        <div className='flex justify-between'>
          <img src={collab01} alt="" />
          <img src={collab02} alt="" />
          <img src={collab03} alt="" />
          <img src={collab04} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Collab
