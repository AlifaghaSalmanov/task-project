import React, { useEffect } from 'react'
import './Home.scss'
import HeroSlider from '../../../Components/Client/HomeComponents/HeroSlider'
import TrainingsComponent from '../../../Components/Client/HomeComponents/TrainingsComponent'
import TrainersComponent from '../../../Components/Client/HomeComponents/TrainersComponent'
import About from '../../../Components/Client/HomeComponents/AboutComponent'
import Contact from '../../../Components/Client/HomeComponents/ContactComponent'
import MetaData from '../../../Components/Client/MetaData'
import ScrollToTop from '../../../Components/Client/ScrollToTop/ScrollToTop'
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <MetaData title="Əsas Səhifə"/>
      <HeroSlider/>
      <TrainingsComponent/>
      <TrainersComponent/>
      <About/>
      <Contact/>
      <ScrollToTop/>
    </div>
  )
}

export default Home