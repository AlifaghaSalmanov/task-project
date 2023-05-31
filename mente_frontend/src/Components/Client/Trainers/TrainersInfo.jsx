import React, { useState } from "react";
import "./TrainersInfo.scss";
import trainerimage from "../../../Media/trainer.png";
import SimpleAccordion from "./SimpleAccordion";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const TrainersInfo = () => {
  const [trainer, setTrainer] = useState([]);

  const getData = async () => {
    const res = await axios.get(`http://localhost:3000/trainers`);
    setTrainer(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="trainers-info">
        
      <div className="container">
      <div className="trainers-info-title-link">
          <span>
            {" "}
            <Link to="/">Əsas Səhifə</Link> / Təlimçilər
          </span>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Navigation]}
          navigation
          spaceBetween={60}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
       
        >
          {trainer &&
            trainer.map((e) => (
              <SwiperSlide key={e.id}>
                <div className="container">
                  <div className="training-wrapper-container">
                    <div className="row">
                      <div className="col-5 col-md-6 col-s-12 col-xs-12">
                        <img src={trainerimage} />
                      </div>
                      <div className="col-7 col-md-6 col-s-12 col-xs-12">
                        <div className="teachers-info">
                          <h3>{e.trainer_name}  {e.trainer_surname}</h3>

                          <p>
                         {e.trainer_info}
                          </p>
                        </div>
                        <SimpleAccordion />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrainersInfo;
