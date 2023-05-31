import React from 'react'
import TrainersInfo from '../../../Components/Client/Trainers/TrainersInfo';
import { useEffect } from 'react';
import MetaData from '../../../Components/Client/MetaData';

const Trainers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <MetaData title="Təlimçilər"/>
      <TrainersInfo/>
    </div>
  )
}

export default Trainers;