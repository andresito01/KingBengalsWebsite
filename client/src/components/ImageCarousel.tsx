// @ts-nocheck
import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./styles/ImageCarousel.css"
import cat1 from "../images/Litter1.png"
import cat2 from "../images/Placeholder.png"
import cat3 from "../images/Litter2.png"
import cx from 'classnames';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import imageCarouselImages from  "../json/imageCarousel.json"

const images = [cat1, cat2, cat3];

const ImageCarousel = () => {

   //Owl Carousel Settings
   const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
  };

  return (
    <div className='container'>
      <OwlCarousel id="catteryImgs" className="owl-carousel owl-theme" {...options}>
        {
          imageCarouselImages.length === 0 ?
            <div className="item">
              <h3>No Images</h3>
            </div> :
            imageCarouselImages.map((catImg, index) => {
              return (
                <div className=" item" key={index}>
                   <img className="itemImg" alt="sliderImg" src={catImg.image} />
                </div>
              )
            })
        }
      </OwlCarousel>             
    </div>
  );
}

export default ImageCarousel;