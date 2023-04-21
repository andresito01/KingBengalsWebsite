import React from "react";
import TestimonialsCSS from "./styles/Testimonials.module.css";
import testimony from "../json/testimonials.json";

/* >>>>>>>>>>>>>>>>>>>>>>>>>>    Testimonials' Container    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const Testimonials = () => {
  return (
    <div className={TestimonialsCSS.testimonialsContainer}>
      {/* >>>>>>>>>>>>>>>>>>    Testimonials' Title   <<<<<<<<<<<<<<<<<<*/}
      <TStatement />
      {/* >>>>>>>>>>>>>>>>>>    Testinonies' container   <<<<<<<<<<<<<< */}
      <section className={TestimonialsCSS.testimoniesContainer}>
        {testimony.map((testimony) => {
          return <Testimony {...testimony}></Testimony>;
        })}
      </section>
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
type TestimonyProps = {
  id: number;
  testifierImg: string;
  testifierName: string;
  testifierQuote: string;
};

const Testimony: React.FunctionComponent<TestimonyProps> = (props) => {
  const { id, testifierImg, testifierName, testifierQuote } = props;

  return (
    <div className={TestimonialsCSS.testimonyContainer} key={id}>
      <section>
        <img src={testifierImg} alt="Testimony" />
      </section>
      <section className={TestimonialsCSS.testimonyText}>
        <h1>{testifierName}</h1>
        <h4>{testifierQuote}</h4>
      </section>
    </div>
  );
};

export default Testimonials;
