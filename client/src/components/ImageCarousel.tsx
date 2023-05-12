// @ts-nocheck
import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
//import "./styles/ImageCarousel.css"
import cat1 from "../images/catImage26.jpg"
import cat2 from "../images/catImage24.jpg"
import cat3 from "../images/catImage30.jpg"
import cx from 'classnames';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import imageCarouselImages from  "../json/imageCarousel.json"
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => {
  console.log(imageCarouselImages)
  return (
    <Carousel fade style={{height:"20rem", width:"90%", display:"flex",alignItems:"center"}}>
      {
        imageCarouselImages.length === 0 ? null :
        imageCarouselImages.map((catImg, index) => {
          return (
           
              <Carousel.Item style={{height:"auto", width:"200px", position:"relative", display:"flex", alignItems:"center", marginLeft: "32%"}}>
                <img
                  className="itemImg d-block w-100"
                  src={catImg.image}
                  alt="sliderImg"
                  style={{scale:"0.7"}}
                />
              </Carousel.Item>
            
          )
        })
      }
    </Carousel>
  );
}

export default ImageCarousel;