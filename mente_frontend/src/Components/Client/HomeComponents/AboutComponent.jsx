import React, { useEffect } from 'react'
import './About.scss'
const AboutComponent = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}, [])
  return (
    <div className='about'>
      
<div className="container">
<div className="about-title">
            <h2>Haqqımizda </h2>
        </div>
        <div className="about-wrapper">
          <div className="about-header">
          <h3>Biz kimik ?</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet aspernatur sequi aliquid, facilis consectetur quibusdam doloremque! Cumque numquam ipsam omnis, possimus dolorum, reprehenderit doloribus explicabo commodi accusamus porro ea? Ad dignissimos distinctio saepe possimus laudantium assumenda sit vel enim mollitia, error esse beatae, cum ullam reprehenderit ipsum adipisci ab! Molestiae, mollitia sequi! Aperiam dolor beatae veritatis harum eaque vel repellat temporibus ad voluptates ex quos eos suscipit, totam ea veniam iure hic aut enim repudiandae illo iusto quibusdam soluta fugit. Amet ratione voluptatum impedit praesentium sunt quod, consectetur fuga sapiente odio, corporis ab? Eligendi optio ipsa qui adipisci dolores.</p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quod officia corrupti enim harum obcaecati sed laudantium dolorem, labore provident illum! At sequi officiis deserunt dolorem, doloremque laudantium eius itaque possimus. Unde hic fugiat porro, ex ullam asperiores nisi cupiditate dolore vel, reprehenderit dolorem officia maiores commodi cum perspiciatis delectus?</p>

        </div>
</div>
    </div>
  )
}

export default AboutComponent