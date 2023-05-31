import React, { useEffect } from 'react'
import MetaData from '../../../Components/Client/MetaData';
import ContactComponent from './../../../Components/Client/HomeComponents/ContactComponent';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <MetaData title="Əlaqə"/>
      <ContactComponent/>
    </div>
  )
}

export default Contact