import React, { useContext, useEffect ,useState} from 'react'
import './TrainingsInfo.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const TrainingDetail = () => {
    const [data, setData] = useState({});
    const params = useParams();
  
  



    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/trainings/${params.id}`);
        setData(res.data);
    };
    useEffect(() => {
        getData()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }, [])
    const { id,training_title, training_details} = data;

  return (

  


    <div>
          <div className='trainings-info'>
        <div className="container">
       
            <div className="trainings-info-wrapper">
             <div className="row">
             <div className="col-6 col-md-6 col-s-12 col-xs-12">
                    <img src="https://s35691.pcdn.co/wp-content/uploads/2014/09/iStock-516797126.jpg" alt="students" />
                </div>
                <div className="col-6 col-md-6 col-s-12 col-xs-12">
                    <h3>{training_title}</h3>
                    <p>{training_details}
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque, quia voluptas dicta architecto possimus adipisci eligendi error quasi autem
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sunt nisi tempore necessitatibus, repellat harum alias atque recusandae voluptate assumenda!
                    </p>
                </div>
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TrainingDetail