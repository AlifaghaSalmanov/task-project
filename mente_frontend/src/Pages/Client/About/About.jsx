import React, { useEffect } from 'react'
import AboutComponent from '../../../Components/Client/HomeComponents/AboutComponent';
import MetaData from '../../../Components/Client/MetaData';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <MetaData title="Haqqında"/>
     <AboutComponent/>
    </div>
  )
}

export default About