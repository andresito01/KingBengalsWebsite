import React from "react";
import TestimonialsCSS from "./styles/Testimonials.module.css";
import { TestimonyData } from "../admin/context/TestimonyContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

/* >>>>>>>>>>>>>>>>>>>>>>>>>>    Testimonials' Container    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const Testimonials = () => {
  return (
    <div className={TestimonialsCSS.testimonialsContainer}>
      {/* >>>>>>>>>>>>>>>>>>    Testimonials' Title   <<<<<<<<<<<<<<<<<<*/}
      <TStatement />
      {/* >>>>>>>>>>>>>>>>>>    Testinonies' container   <<<<<<<<<<<<<< */}
      <Testimonies />
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>    Testimonials' Title   <<<<<<<<<<<<<<<<<<*/
const TStatement = () => {
  return (
    <article className={TestimonialsCSS.testimonialTitle}>
      <p>Testimonials</p>
    </article>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>>>      Testimony     <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const Testimonies = () => {
  const { testimonyList } = TestimonyData();
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 355;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 355;
  };
  return (
    <div className={TestimonialsCSS.testimoniesContainer}>
      <MdChevronLeft
        className={TestimonialsCSS.mdChevronLeft}
        onClick={slideLeft}
        size={40}
      />
      <div id={"slider"} className={TestimonialsCSS.testimoniesRow}>
        {testimonyList.map((testimonial) => {
          // Deconstruct testimony attributes
          const { id, info } = testimonial;
          const { name, testimony, picture } = info;
          return (
            <div className={TestimonialsCSS.testimonyContainer} key={id}>
              <section>
                <img src={picture} alt="Testimony" />
              </section>
              <section className={TestimonialsCSS.testimonyText}>
                <h1>{name}</h1>
                <p>{testimony}</p>
              </section>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        className={TestimonialsCSS.mdChevronRight}
        onClick={slideRight}
        size={40}
      />
    </div>
  );
};

export default Testimonials;
