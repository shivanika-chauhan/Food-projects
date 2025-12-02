import React from 'react'
import Slider from '../components/Slider'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import About from '../components/About'
import AboutUs from '../components/Aboutus'
const Home = () => {
  return (
    <div>
    
     <Slider/> 
      
       <About/>
      <Welcome/>
      <AboutUs/>
       <Footer/>
    </div>
  )
}

export default Home
