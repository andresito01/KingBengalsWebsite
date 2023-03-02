import React from "react";
import TestimonialsCSS from "./styles/Testimonials.module.css";

/* >>>>>>>>>>>>>>>>>>>>>>>>>>    Testimonials' Container    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const Testimonials = () => {
  return (
    <div className={TestimonialsCSS.testimonialsContainer}>
      {/* >>>>>>>>>>>>>>>>>>    Testimonials' Title   <<<<<<<<<<<<<<<<<<*/}
      <TStatement />
      {/* >>>>>>>>>>>>>>>>>>    Testinonies' container   <<<<<<<<<<<<<<<<<<*/}
      <section className={TestimonialsCSS.testimoniesContainer}>
        <Testimony
          img1={firstTestimony.img1}
          testifierName={firstTestimony.testifierName}
          testifierQuote={firstTestimony.testifierQuote}
        />
        <Testimony
          img1={secondTestimony.img1}
          testifierName={secondTestimony.testifierName}
          testifierQuote={secondTestimony.testifierQuote}
        />
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
  img1: string;
  testifierName: string;
  testifierQuote: string;
};

const Testimony: React.FunctionComponent<TestimonyProps> = (props) => {
  const { img1, testifierName, testifierQuote } = props;

  return (
    <div className={TestimonialsCSS.testimonyContainer}>
      <section>
        <img src={img1} alt="Testimony" />
      </section>
      <section className={TestimonialsCSS.testimonyText}>
        <h1>{testifierName}</h1>
        <h4>{testifierQuote}</h4>
      </section>
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>>>     Temporal Testimonies     <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const firstTestimony = {
  img1: require("../images/TempTestimony.jpg"),
  testifierName: "Amanda Smith",
  testifierQuote:
    "I Love this place, I got a starting kit courtesy from Lidia to care for my little kitten.",
};
const secondTestimony = {
  img1: require("../images/TempTestimony.jpg"),
  testifierName: "Ely White",
  testifierQuote:
    "I bought my first Bengal cat at Kingbengals and I really appreciate Lidia’s guidance on how to care for him.",
};

export default Testimonials;
