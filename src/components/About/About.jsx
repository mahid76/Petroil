import React from 'react'
import Container from '../Layout/Container'
import about01 from '../../assets/about01.jpg'

const About = () => {
  return (
    <section className='bg-[#F0F0F0] py-[136px] '>
      <Container>
       <div className='flex'>
         <div className='max-w-[413px] text-center bg-primary py-[100px] px-[75px]  '>
          <h3 className='font-primary text-[36px] font-bold text-white '>Learn more about our company</h3>
        </div>
        <div className='relative'>
          <img className='w-full' src={about01} alt="" />
         <div className='absolute  top-1/2 left-1/2 transform -translate-1/2'>
           <a  href="#">
          <button className='py-[14px] px-[30px] text-primary bg-white  '>Learn More</button>

          </a>
         </div>
        </div>
       </div>
      </Container>
   </section>
  )
}

export default About
