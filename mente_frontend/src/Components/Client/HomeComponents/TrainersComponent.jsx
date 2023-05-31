import React from "react";
import "./TrainersComponent.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import trainer from "../../../Media/trainers1.png";
import trainerb1 from "../../../Media/trainersbackground.png";
import trainerb2 from "../../../Media/trainersbackground2.png";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Pagination ,Navigation} from "swiper";
const TrainersComponent = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get('http://localhost:3000/trainers');
    setData(res.data);
};
useEffect(() => {
    getData()
}, [])

  return (
    <section className="trainers">
      <div className="container">
       
        <div className="trainers-wrapper">
        <div className="trainers-title">
          <h2>Təlimlçilər </h2>
        </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination ,Navigation]}

            navigation

            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
          {data&&data.map((e)=>(
              <SwiperSlide key={e.id}>
              <div className="trainer-info-card">
                <div className="trainers-info-card-bg">
                  <img src={trainerb1} className="trainers-info-card-bg-1" />
                  <img src={trainerb2} className="trainers-info-card-bg-2" />
                </div>
                <img src={trainer} className="trainer-photo" />
              </div>

              <div className="trainers-info-card-bottom">
                <h5>{e.trainer_name} {e.trainer_surname}</h5>
                <p>{e.trainer_info}</p>
              </div>
            </SwiperSlide>
          ))

          }
       
     
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrainersComponent;
