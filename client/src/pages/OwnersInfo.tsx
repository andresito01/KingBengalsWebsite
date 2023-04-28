//import React, {useState} from 'react';
import React from 'react';
import OwnersInfoCSS from "./styles/OwnersInfo.module.css";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";

/******************************* Owner's Info ***************************** Note: A link for pro-recomm*/

const OwnersInfo = () => {
  return (
      
    <div className = {OwnersInfoCSS.backgroundLayer}>

      <WebNavHeader/>

      <OwnersInfoPageHeader/>

      <ProductsRecommend/>

      <KittenDevelopment/>

      <PrepareForKitten/>

      <VetInfo/>

      <KittenTraining/>

      <PetInsurance/>

      <Footer/>

      {/*</div>*/}

    </div>

  )
}

/**************************************** Owner's Info Header section *********************************************************/
const OwnersInfoPageHeader = () => {
  return (
      <div className = {OwnersInfoCSS.headerBackground}>
        <img alt="headerImage" src={require("../images/bencat - OwnersInfo header image.jpg")} />
        
      {/*<div className={OwnersInfoCSS.headerOwnersInfo}>
        <h1> Owner's Info </h1>*/}
        <h1 className={OwnersInfoCSS.headerOwnersInfo}> < h1 className={OwnersInfoCSS.boldHeader}> Owner's&nbsp;Info&nbsp; </h1> </h1>
      </div>
  )
}

/**************************************** Products we Recommend *********************************************************/
const ProductsRecommend = () => {

  return (
    <div className={OwnersInfoCSS.containerFullWidth} > {/*ProductsRecom}>*/}
      <h3> _______________</h3>
      <h4> Below is a link to some products that we recommend for your kitten. 
          <br/> From toys, treats, catteries, crates, bedding, grooming products, and accessories. </h4>
      {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> */}
      {/*<div className={OwnersInfoCSS.containerBox}>*/}
        <div className={OwnersInfoCSS.containerRow}>
          <div className={OwnersInfoCSS.imgArrow}>
            <img alt="headerImage" src={require("../images/glowing arrow flipped.png")} width = "150" />
          </div>
          <a href="https://www.amazon.com/s?k=cat+products+for+bengal+cats&crid=2FTEFBBV6WRGU&sprefix=%2Caps%2C190&ref=nb_sb_ss_recent_1_0_recent" target="_blank" rel='noreferrer'> {/*Link to 'Amazon'*/}
            <div className={OwnersInfoCSS.button}>
            <h2 className={OwnersInfoCSS.underline}> < h2 className={OwnersInfoCSS.boldSub}> Products&nbsp;We&nbsp;Recommend </h2> </h2>
            </div>
          </a>
        <div className={OwnersInfoCSS.imgArrow}>
            <img alt="headerImage" src={require("../images/glowing arrow.png")} width = "150" />
          </div>
        {/*<h2 className={OwnersInfoCSS.underline}> A Link or List </h2>*/}
        </div>
      {/*</div>*/}
    </div>
  );

}

/**************************************** Kitten Development Stages *********************************************************/
const KittenDevelopment = () => {
  return (
    <div className={OwnersInfoCSS.containerBox}>
      <h1 className={OwnersInfoCSS.bold}> Kitten Development Stages</h1>
      <h3> _______________</h3>
      <h4> Here you can see the entire process your kitten will take from birth to the day it goes home. </h4>
      
      <div className={OwnersInfoCSS.containerRowBox}>
        <div className={OwnersInfoCSS.containerRow2}>
          <h1 className={OwnersInfoCSS.boldSub}> Age: 1 - 2 weeks <br/>________</h1>
          {/*<h3> ________</h3>*/}
          <div className={OwnersInfoCSS.imgContainer}>
            <img alt="headerImage" src={require("../images/1 week ben kit.jpg")} /> 
          </div>
          {/*<div className={OwnersInfoCSS.text}>*/}
            <h4> <br/> When kittens are born, during the first week they require constant care 
         and their mother's presence and involvement is crucial to their welbeing. As at this age they 
         can't open their eyes, eat solid food, or walk just yet. Their ears are tucked in as well. So, 
         they completely depend on their mother to protect, feed, and clean them. They sleep over 20 hours 
         a day. However, they're not completely helpless as they are often able to crawl to their mother 
         when she feeds them. </h4>
        </div>
        <div className={OwnersInfoCSS.containerRow2}>
          <h1 className={OwnersInfoCSS.boldSub}> Age: 2 - 4 weeks <br/>________</h1>
          {/*<h3> ________</h3>*/}
          <div className={OwnersInfoCSS.imgContainer}>
            <img alt="headerImage" src={require("../images/2 week old ben kit.jpg")} />
          </div>
          <h4> <br/> Eyes open, can walk, get tired very easily, still need LOTS of sleep as their muscles 
          have barely started to develop and get fatigued quickly. Right about now, they start to grow some 
          of their kitten teeth and Mama Bengal does not take to it very kindly. Now they are able to eat some 
          solid food. Need lots attention and care as they are
          very vulnerable to diseases and viruses at this young age.</h4>
        </div>
        <div className={OwnersInfoCSS.containerRow2}>
          <h1 className={OwnersInfoCSS.boldSub}> Age: 2 Months <br/>________</h1>
          {/*<h3> ________</h3>*/}
          <div className={OwnersInfoCSS.imgContainer}>
            <img alt="headerImage" src={require("../images/catImage35.jpg")} />
          </div>
          <h4> <br/> <br/> <br/> <br/>
          <br/> At two months old, they can recieve their first dose of vaccines (see 'Medical Info & Vet Things' below). 
          They have been completely weened off of their mother's milk. They have learned some social skills by interacting with 
          their mother and other litter mates. They're ready to go to their new and forever home. </h4>
        </div>
      </div>

      <h2 className={OwnersInfoCSS.text}> Link / Lay out the process on weekly or biweekly, AND monthly basis</h2>
      {/*</div>*/}
  </div>
  );

}

/**************************************** Preparing For Your Kitten *********************************************************/
const PrepareForKitten = () => {
  return (
  <div className={OwnersInfoCSS.containerRowTransparent}>
    <div className={OwnersInfoCSS.containerRow2}>
      <h1 className={OwnersInfoCSS.bold}> Preparing For Your Kitten </h1>
      <h3> ________</h3>
      <h4> When you pick up your adorable kitten, it will go smoothly if you anticipate and prepare for the coming of that small bundle of joy and energy into your house.
            Here are a few helpful tips and guidelines that can make the transition easier on you and your kitten.</h4>
      <a href="https://www.youtube.com/watch?v=A_MjCqQoLLA" target="_blank" rel='noreferrer'> {/*Place Holder link to 'Hey Jude - The Beatles'*/}
        <div className={OwnersInfoCSS.button}>
          <h3 className={OwnersInfoCSS.underline}> <h3 className={OwnersInfoCSS.boldSub}> Video for preparing (YouTube link)</h3> </h3>
        </div>
      </a>
    </div>
    <div className={OwnersInfoCSS.containerRow1}>
      {/*<h1 className={OwnersInfoCSS.bold}> Pic of a Kitten </h1>*/}
      <div className={OwnersInfoCSS.imgContainer2}>
      <img alt="headerImage" src={require("../images/bengal cats_three colors.jpg") } />{/*} width = "600" height = "300" />*/}
      </div>
    </div>
  </div>
  );
}

/**************************************** Medical Information & Vet Things *********************************************/
const VetInfo = () => {

  return (
    <div className={OwnersInfoCSS.containerBox}>
      <h1 className={OwnersInfoCSS.bold}> Medical Information and Vet Things </h1>
      <h3> ________</h3>
      <h4> Vaccinations and Deworming (probably it’s own section) 
        <br/> Vaccination Schedule <br/> Shots: Parvo, Distemper, Flu, etc.<br/> 
        <br/> Spaying and Neutering, OR 
        <br/> Hysterectomy (for girls) or a Vasectomy (for boys) 
        <br/> At what age should it be performed? Benefits? Drawbacks? <br/> 
        <br/> Any health concerns regarding the breed or kittens in general?
        <br/> Bengal cat health problems and diseases that owners need to be aware of.
        <br/> Bengal cats can be prone to, such as : Heart disease, Eye disease, Joint problems, Kidney disease, </h4>
      {/*<div className={OwnersInfoCSS.imgCenter}>
          <img alt="headerImage" src={require("../images/bengal-cat.jpg")} width = "700" height = "500" />
      </div>*/}
    </div>
  );

}

/**************************************** Training Your Kitten *********************************************************/
const KittenTraining = () => {
  return (
  <div className={OwnersInfoCSS.containerRowTransparent}>
    <div className={OwnersInfoCSS.containerRow1}>
      <div className={OwnersInfoCSS.imgContainer3}>
      {/*<h2 className={OwnersInfoCSS.bold}> Pic of a kitten in training </h2>*/}
        <img alt="headerImage" src={require("../images/How-Do-I-Exercise-a-Bengal-Cat.jpg")} width = "700" height = "450"/>
      </div>
    </div>
    <div className={OwnersInfoCSS.containerRow2}>
      <h1 className={OwnersInfoCSS.bold}> Training </h1>
      <h3> ________</h3>
      <h4> How to train a kitten? <br/>
           Training courses? <br/>
           Training resources? <br/>
           Any offers with training? <br/>
           Litter Training <br/>
           Benefits of training you kitten. </h4>

    </div>
  </div>
  );
}
 
/**************************************** Pet Insurance *********************************************************/
const PetInsurance = () => {

  return (
    <div className={OwnersInfoCSS.containerRowBox2}>
      <div className={OwnersInfoCSS.containerRow3}>
        <h1 className={OwnersInfoCSS.bold}> Pet Insurance </h1>
        <h3> ________</h3>
        <h4> Benefits of pet insurance and, <br/> 
             Recommendations for different insurance companies.<br/> 
             Trupanion? ASPCA? etc.</h4>
      </div>
    </div>
  );
}

/**************************************** Naming your Kitten ************************************************* */


/**************************************** Social Media *********************************************************/
const SocialMedia = () => {

  return (
    <div className={OwnersInfoCSS.containerBottom}>
      <div className={OwnersInfoCSS.containerRow1}>
        <h3>________________________________</h3>
        <h1 className = {OwnersInfoCSS.textLeftBold}> Follow Us On </h1> <br/>
        <div className = {OwnersInfoCSS.imgInsta}>
          <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'> {/* Should be a link to KB Instagram account */}
            <img alt="headerImage" src={require("../images/transparent-social-media.png")} width = "85" height = "75" /> 
          </a>
        </div>
      </div> 
    </div>
  )
}

export default OwnersInfo;