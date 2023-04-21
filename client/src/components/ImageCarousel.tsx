// @ts-nocheck
import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./styles/ImageCarousel.css"
import cat1 from "../images/catImage26.jpg"
import cat2 from "../images/catImage24.jpg"
import cat3 from "../images/catImage30.jpg"
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
    items: 9,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    smartSpeed: 350,
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