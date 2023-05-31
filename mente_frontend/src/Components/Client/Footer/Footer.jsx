import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from '../../../Media/main.gif'
import facebook from '../../../Media/facep.png'
import twitter from '../../../Media/twitp.png'
import gplay from '../../../Media/geogleplay.jpg'
import appstore from '../../../Media/appstore.png'


const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-wrapper">
            <div className="col-2 col-s-6 col-md-6">
              <svg
              className="footer-logo"
                width="208"
                height="150"
                viewBox="0 0 208 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.2097 61.9177C86.8551 62.6929 86.9867 63.7366 86.5427 64.6214C83.706 70.2671 77.5682 74.2339 70.3655 74.3814C60.5277 74.5818 50.6857 74.7746 40.8479 74.9751C39.3144 75.0091 35.6185 75.304 31.9597 77.7015C31.38 78.0872 30.1467 78.9153 28.9092 80.2502C28.7941 80.3712 28.679 80.4998 28.5639 80.6283C28.1651 81.0859 27.9637 81.6607 27.9637 82.243V101.559C27.9637 102.096 28.1405 102.618 28.4735 103.06C29.3121 104.176 30.7387 105.771 32.8723 107.189C33.0491 107.307 33.2259 107.42 33.4027 107.53C36.2393 109.273 39.6145 110.143 43.0267 110.169C43.035 110.169 43.0473 110.169 43.0555 110.169C44.6301 110.18 45.8963 111.357 45.8963 112.805V150.324C45.8963 161.419 35.6185 170.408 22.944 170.408C10.2695 170.408 0 161.419 0 150.324V20.7451C0 20.6581 0 20.5674 0.0041111 20.4842C-0.131555 14.154 3.14499 7.86922 9.42674 3.85709C13.5091 1.25545 18.2409 0 22.9317 0C30.011 0 36.9958 2.85879 41.4892 8.25115L86.2097 61.9177Z"
                  fill="#5F038B"
                />
                <path
                  d="M208 90.7911C207.943 94.4686 206.85 97.536 205.661 99.8208C204.172 102.678 201.895 105.181 198.984 107.007C198.239 107.47 197.418 107.925 196.512 108.346C190.97 110.908 185.62 110.613 183.448 110.508C181.983 110.441 180.508 110.39 179.038 110.357C165.84 110.079 152.614 111.24 139.412 111.131C136.873 111.11 134.797 112.907 134.744 115.145C134.601 121.436 134.463 127.722 134.324 134.012C134.129 142.684 133.933 151.361 133.742 160.033C133.685 161.64 133.384 163.958 132.248 166.538C130.458 170.619 127.542 173.135 125.933 174.334C124.344 175.449 122.082 176.758 119.146 177.709C117.041 178.395 115.008 178.757 113.142 178.912C107.29 179.4 101.405 177.848 97.0712 174.351C96.0498 173.527 95.0331 172.555 94.0833 171.406C89.5919 165.944 89.6779 160.129 89.7685 158.45L89.7351 129.796C89.7208 119.626 80.2751 111.228 68.734 111.139C63.393 111.093 58.0521 111.055 52.7159 111.013C48.635 110.98 44.5541 110.946 40.4732 110.912C39.3611 110.904 38.249 110.895 37.1416 110.887C33.1801 110.857 29.2615 109.89 25.9681 107.95C25.7629 107.828 25.5576 107.702 25.3524 107.571C23.0995 106.136 21.5244 104.538 20.5269 103.33C19.9541 102.636 19.6534 101.798 19.6534 100.94V80.2425C19.6534 79.2789 20.021 78.3364 20.7417 77.6085C20.7417 77.6085 20.7512 77.6001 20.7512 77.5959C22.1879 76.1105 23.6198 75.1891 24.2928 74.7599C28.5407 72.0922 32.8316 71.764 34.612 71.7262C46.0337 71.5032 57.4602 71.2886 68.882 71.0656C77.9697 70.8888 85.6017 65.6881 88.4321 58.5267C88.7996 57.5968 89.086 56.6375 89.2817 55.6486C89.506 54.521 89.6206 53.3639 89.6015 52.1815C89.5872 50.5658 89.5681 49.0005 89.5585 47.49C89.4822 36.4659 89.6731 28.1936 90.0072 23.6872C90.1408 21.9031 90.4511 18.6464 92.2409 14.8931C92.5703 14.1863 92.9283 13.5257 93.3053 12.8945C96.6941 7.2436 103.042 3.33047 110.283 2.9097C111.094 2.85921 111.934 2.85079 112.812 2.88445C115.819 2.99806 118.411 3.625 120.502 4.37397C123.533 5.45955 126.225 7.17207 128.329 9.35585C128.864 9.90706 129.36 10.4877 129.814 11.0936C130.496 12.0151 131.16 13.067 131.737 14.2578C133.141 17.1695 133.494 19.7951 133.575 21.4866C133.718 31.8206 133.852 42.1462 133.995 52.4761C134.138 62.7007 143.584 70.9267 155.182 70.9267H185.467C185.648 70.9267 185.83 70.9351 186.006 70.9562C187.462 71.1034 188.899 71.2549 190.35 71.4064C190.569 71.4274 190.784 71.4653 190.999 71.5116C192.082 71.7682 193.237 72.1133 194.435 72.5761C196.989 73.5607 199.089 74.8356 200.783 76.14C204.487 78.9886 206.974 82.8891 207.709 87.1767C207.9 88.2833 208.005 89.4952 207.991 90.7911H208Z"
                  fill="#BC7BDB"
                />
              </svg>
            </div>
            <div className="col-2 col-s-6 col-md-6">
              <ul className="footer-column">
                <li>
                  <h4>Haqqında</h4>
                </li>
                <li>
                  <Link to="/">Əsas səhifə</Link>
                </li>
                <li>
                  <Link to="/trainings">Təlimlər </Link>
                </li>
                <li>
                  <Link to="/trainers">Təlimçilər</Link>
                </li>
              </ul>
            </div>
            <div className="col-2 col-s-6 col-md-6">
              <ul className="footer-column">
                <li>
                  <h4>Əlaqə</h4>
                </li>
                <li>
                  <Link to="tel:(+994 77) 280 20 02">(+994 77) 280 20 02</Link>
                </li>
                <li>
                  <Link to='/'
      >meteacdemy@gmail.com</Link>
                </li>
              
              </ul>
            </div>
            <div className="col-2 col-s-6 col-md-6">
              <ul className="footer-column">
                <li>
                  <h4>Bizi izləyin</h4>
                </li>
                <li>
                    <ul className="social-groups">
                        <li>
                            <img src={facebook}/>
         </li>

         <li>
                            <img src={twitter}/>
         </li>


<li><svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<rect x="0.015625" width="23.93" height="18.8741" rx="5" fill="white"/>
<rect x="4.61768" y="3.62939" width="14.7262" height="11.6148" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0_59_85" transform="matrix(0.0078125 0 0 0.0099053 0 -0.133939)"/>
</pattern>
<image id="image0_59_85" width="128" height="128" href="data:image/png;base64,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"/>
</defs>
</svg></li>
                    </ul>
                </li>
                <li>
                    <ul className="social-groups">
<li>
    <img src={gplay}/>
</li>
<li>
    <img src={appstore}/>
</li>
                    </ul>
                </li>
              
              </ul>
            </div>
            <div className="col-3 col-s-12 col-md-6 ">
            <img src={logo} alt="footer-gif "  className="footer-gif"/>

            </div>
          </div>
        </div>
      </div>
      <div className="footer-bootom">
       <div className="container">
         <hr />
        <span>© 2023  Bütün müəllif hüquqları qorunur</span>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
