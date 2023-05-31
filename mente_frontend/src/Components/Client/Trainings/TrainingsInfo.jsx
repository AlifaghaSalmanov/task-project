import React, { useEffect, useState } from "react";
import "./TrainingsInfo.scss";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Pagination ,Navigation} from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const TrainingsInfo = () => {
  const [training, setTraining] = useState([]);

  const getData = async () => {

    const res = await axios.get(` http://localhost:3000/trainings`);
    setTraining(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="trainings-info">
      <div className="container">
        <div className="trainings-info-title">
          <span>
            {" "}
            <Link to="/">Əsas Səhifə</Link> / Təlimlər
          </span>
        </div>

        <Swiper
          modules={[Pagination,Navigation]}
          spaceBetween={60}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation
        >
          {training&&
            training.map((e) => (
              <SwiperSlide key={e.id}>
                <div className="trainings-info-wrapper">
                  <div className="row">
                    <div className="col-6 col-md-6 col-s-12 col-xs-12">
                      <img
                        src="https://s35691.pcdn.co/wp-content/uploads/2014/09/iStock-516797126.jpg"
                        alt="students"
                      />
                    </div>
                    <div className="col-6 col-md-6 col-s-12 col-xs-12">
                      <h3>{e.training_title}</h3>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat itaque, quia voluptas dicta architecto possimus
                        adipisci eligendi error quasi autem Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Molestias sunt
                        nisi tempore necessitatibus, repellat harum alias atque
                        recusandae voluptate assumenda!
                      </p>
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat itaque, quia voluptas dicta architecto possimus
                        adipisci eligendi error quasi autem Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Molestias sunt
                        nisi tempore necessitatibus, repellat harum alias atque
                        recusandae voluptate assumenda!
                      </p>
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

export default TrainingsInfo;
