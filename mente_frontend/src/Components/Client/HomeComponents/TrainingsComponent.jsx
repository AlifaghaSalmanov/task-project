import React, { useEffect, useState } from "react";
import "./TrainingsComponent.scss";
import trainings from "../../../Media/telim.png";
import trainings1 from "../../../Media/trainings1.png";
import trainings2 from "../../../Media/trainings2.png";
import { Link } from "react-router-dom";

import axios from "axios";

const TrainingsComponent = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/trainings");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="trainings">
      <div className="container">
        <div className="trainings-title">
          <h2>Təlimlər </h2>
        </div>
        <div className="training-title-wrapper">
          <div className="row">
            <div className="col-6 col-s-12 col-md-6 col-xs-12">
              <img src={trainings} className="training-image-main" />
            </div>
            <div className="col-6 col-s-12 col-md-6 col-xs-12">
              <h3>Onlayın təhsilimizdən yararlanın </h3>
              <ul className="training-list-wrapper">
                {data &&
                  data.map((e) => (
                    <li key={e.id}>
                      <Link className="training-list-link" to={`/trainings/${e.id}`}>
                        <ul className="trainings-list">
                          <li>
                            <img src={trainings1} />
                          </li>
                          <li>
                            <h4>{e.training_title}</h4>
                            <p>{e.training_info}</p>
                          </li>
                        </ul>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="trainings-bottom">
          <Link to="/trainings">Daha çox</Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingsComponent;
