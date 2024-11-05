
import { Link, useNavigate } from "react-router-dom"

import "./home.css";

import Carousel from 'react-bootstrap/Carousel';


export default function Home(props) {




  const PropsData = props.data


  return (
    <>
      <header>

      </header>
      <div className="home-pic">
        <Carousel>
          <Carousel.Item>
            <div class="image-container">
              <img
                className="d-block w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/June/Fathers_Day/D139279928_IN_WLA_BAU_FathersDay_Hero_PC_Hero_3000x1200._CB555670465_.jpg"
                alt="Second slide"
              />

            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div class="image-container">
              <img
                className="d-block w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                alt="Second slide"
              />
            </div>

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="image-container">
              <img
                className="d-block w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/June/Unrec/166-1._CB555072489_.jpg"
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <div class="image-container">
              <img
                className="d-block w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/June/IYD/GW/Hero/Unrec/yoga_unrec_3000x1200._CB553809853_.png"
                alt="fourth slide"
              />
            </div>

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       </div>
    </>




  )
}


