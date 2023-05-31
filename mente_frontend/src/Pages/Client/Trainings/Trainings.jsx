import React from 'react'
import TrainingsInfo from '../../../Components/Client/Trainings/TrainingsInfo'
import { useEffect } from 'react';
import MetaData from '../../../Components/Client/MetaData';

const Trainings = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <MetaData title="Təlimlər"/>
      <TrainingsInfo/>
    </div>
  )
}

export default Trainings