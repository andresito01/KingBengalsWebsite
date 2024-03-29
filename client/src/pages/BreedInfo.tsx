import React from "react";
import BreedInfoCSS from "./styles/BreedInfo.module.css";
import topImage from "../images/SpottedVsMarbled_edited.png";
import spotted from "../images/SpottedBengals.png";
import marbled from "../images/MarbledBengals.png";
import redstar from "../images/1024px-Paintedcats_Red_Star_standing.jpg";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import bengalKitten from "../images/Bengal-Cats.jpg";
import { positional } from "yargs";
import NavBarUnderLayer from "../components/NavBarUnderLayer";

const BreedInfo = () => {
  return (
    <div className={BreedInfoCSS.breedInfoPage}>
      <WebNavHeader />

      <div className={BreedInfoCSS.backgroundLayer}>
        <BreedHistory />

        <PatternsSpotMarble />

        <Personality />

        <FunFacts />

        <BengalCatHealth />

        <OwnerCompatibility />

        <Footer />
      </div>
    </div>
  );
};

/**************************************** Breed History *************************************************/

const BreedHistory = () => {
  return (
    <div className={BreedInfoCSS.bengalsTextContainer}>
      <h2 className={BreedInfoCSS.sectionHeader}>
        {" "}
        <br /> The Bengal Cat
      </h2>
      <img
        className={BreedInfoCSS.bengalsIntroPic}
        src={redstar}
        alt="Bengal cat by LightBurst"
        style={{ float: "right", height: 345 }}
      />
      <p className={BreedInfoCSS.text}>
        The Bengal breed of cats gets their name from the Asian leopard cat,
        taxonomic name: <i>Prionailurus bengalensis</i>, from which they are
        bred together with domestic cat breeds and usually again with cat breeds
        that have a more friendly nature. Bengal cats are considered domestic
        when they are at least the fourth generation away from their wild
        grandparent. The Bengal breed was officially recognized by The
        International Cat Association --TICA-- in 1986, and was granted
        championship status in 1991.
        <br />
        <br />
        With their appearance of a miniature leopard, the initial goal was to
        produce a cat breed to serve as an alternative to keeping wild cats as
        pets. Bengals are strikingly known for being the only domestic cat breed
        to feature "rosettes" --spotted markings-- though their fur can sport an
        assortment of stripes and swirls.
        <br />
        <br />
        The earliest mentions of a Asian leopard cat and domestic breed cross
        appeared in the first cat pedigree book{" "}
        <i>Our Cats and All About Them</i>, written by Harrison Weir in 1889.
        However, cat breeder and conservationalist Jean Mill is credited with
        creating the modern Bengal cat breed. Mill created the her first Asian
        leopard cat and black tomcat cross in 1963, making this F1 cross the
        first documented mating of an Asian leopard cat with a domestic breed.
        She would become venture in earnest with her breeding program in 1970,
        when she received a gift of Bengal cats by Willard Centerwall.
        <br />
        <br />
        In 1982, during her travels in India, Mill obtained two Egyptian Mau
        cats and bred them with the Centerwall Bengal cats. Mill would succeed
        where other Bengal breeders failed: she would retain the fertility of
        Bengal crossbreeds from the F1 through F4 generations and achieved a
        fertile F5 Bengal with a domestic cat temperament.
      </p>
    </div>
  );
};

/**************************************** Bengal Cat Personality and Caretaking *************************************************/

const Personality = () => {
  return (
    <div className={BreedInfoCSS.bengalsTextContainer}>
      <h2 className={BreedInfoCSS.sectionHeader}>Personality and Caretaking</h2>
      <img
        className={BreedInfoCSS.bengalsIntroPic}
        src={bengalKitten}
        alt="Placeholder"
        style={{ float: "right", height: 300 }}
      />
      <p className={BreedInfoCSS.text}>
        The Bengal is a medium-to-high maintenance cat, as they have are very
        active, energetic, and very affectionate with their owner. Though not
        typically lap cats, Bengals very much enjoy the company on their Breed,
        and do best with another cat buddy to keep them company.
        <br />
        <br />
        Bengals remain athletic even into their senior years, and require a
        decent amount of space and forms of entertainment to keep content;
        plenty of second-story territory in the form of catwalks, perches, and
        cat trees are great ways to satisfy a Bengal's explorative spirit.
        Unlike most cat breeds, Bengals like the water, and could opt to join
        their owner in the shower to play in the running water!
        <br />
        <br />
        In terms of grooming and nutrition, the Bengal does not demand any
        particular care. Routine coat brushing and monthly claw trimming, and
        ideally teeth- brushing, will be enough for most Bengals.
      </p>
    </div>
  );
};

/**************************************** Patterns - Spotted & Marble *********************************************************/
const PatternsSpotMarble = () => {
  return (
    <div className={BreedInfoCSS.containerBox}>
      <div className={BreedInfoCSS.containerRowBox}>
        <div className={BreedInfoCSS.imgContainer}>
          <img
            className={BreedInfoCSS.topPicture}
            src={topImage}
            style={{ width: 800 }}
            alt="Breed Information"
          />
        </div>
        <h1 className={BreedInfoCSS.bold}>
          {" "}
          Bengal Cat <br /> Patterns{" "}
        </h1>
      </div>

      <h5 className={BreedInfoCSS.textContainer}>
        {" "}
        Bengal Cat are born with one of two patterns: Spotted or Marbled.
        <br /> Along with their personality, it's one of their defining
        characteristics that makes them unique.
        <br /> Althought, some may use the word 'exotic' to refer to their
        uniqueness in the feline kingdom.
        <br /> <br />{" "}
        <i>
          {" "}
          Below are pictures of each pattern with different combinations of
          colors they can be born with.{" "}
        </i>{" "}
      </h5>

      <div className={BreedInfoCSS.containerRowBox3}>
        <div className={BreedInfoCSS.containerRow3}>
          <h2> Spotted </h2>
          {/*<div className={BreedInfoCSS.imgContainer}>*/}
          <div className={BreedInfoCSS.imgContainer1}>
            <img
              alt="headerImage"
              src={require("../images/SpottedBengals.png")}
            />
          </div>
        </div>

        <div className={BreedInfoCSS.containerRow3}>
          <h2> Marbled </h2>
          {/*<div className={BreedInfoCSS.imgContainer}>*/}
          <div className={BreedInfoCSS.imgContainer1}>
            <img
              alt="headerImage"
              src={require("../images/MarbledBengals.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**************************************** Fun Facts about Bengal Cats *********************************************************/
const FunFacts = () => {
  return (
    <div className={BreedInfoCSS.containerRowBox}>
      <div className={BreedInfoCSS.containerRow1}>
        <h1 className={BreedInfoCSS.textContainer}>
          {" "}
          Bengal kittens can be Goofy{" "}
        </h1>
        <img
          alt="headerImage"
          src={require("../images/cute cat on back.jpg")}
          width="700"
          height="450"
        />
      </div>
      <div className={BreedInfoCSS.containerRow2}>
        <h1> 7 Fun Facts about Bengal Cats </h1>
        <h3> _______________</h3>
        <ol type="1" className={BreedInfoCSS.funFactList}>
          <li>
            1. Bengals have glittery furs. Under the sun, Bengals’ luxury coats
            sparkle like someone threw golden glitter over them.
          </li>
          <li>
            2. Bengals love water. Unlike other breeds, Bengals like water and
            do not mind joining their owners in the bathtub.
          </li>
          <li>
            3. Bengals enjoy walking out with their owners. They can easily be
            trained to wear small leashes or harnesses, unlike other cats.
          </li>
          <li>
            4. Bengals are natural hunters, it runs in their genes. They are
            highly skillful in catching their prey, be careful if you own small
            pets like hamsters, guinea pigs, or birds.
          </li>
          <li>
            5. Bengals are incredible climbers. They can climb even places you
            never thought they would climb.
          </li>
          <li>
            6. Bengals are smart and highly trainable. They can learn dog tricks
            and commands such as retrieving toys and rollovers in exchange for
            treats.
          </li>
          <li>
            7. Bengals love attention. They will do anything possible to keep
            their human's full attention.
          </li>
        </ol>
      </div>
    </div>
  );
};

/**************************************** Bengal Cat Health *********************************************************/
const BengalCatHealth = () => {
  return (
    <div className={BreedInfoCSS.containerRowBox2}>
      <div className={BreedInfoCSS.containerRow1}>
        <h1> Bengal Cat's Health </h1>
        <h3> _______________</h3>
        {/*<h3>
          {" "}
          Heart disease <br />
          Eye disease
          <br />
          Joint problems <br />
          kidney disease{" "}
        </h3>*/}
        <div className={BreedInfoCSS.textContainer}>
          <h5>
            Bengal Cats are generally healthy. However, like most other cats,
            they are prone to a number of health problems, especially during the
            latter part of their lives, hence it is always advised to visit the
            vet periodically. Some of those issues are listed below:
          </h5>
        </div>
        <h4> _______________</h4>

        <div className={BreedInfoCSS.containerRowBox4}>
          {/*<h4> Heart disease <br />*/}

          <h5 className={BreedInfoCSS.text}>
            {" "}
            Bengal cats, just like other cats can be prone to some
            diseases/ilnesses over their lifetime.
            <ol type="1" className={BreedInfoCSS.funFactList}>
              <li>
                # Heart diseases such as Hypertrophic Cardiomyopathy, aka HCM.
                However, that is common amongst cats and not special to Bengal
                Cats.
                {/*<br/> Eye disease*/}
              </li>
              <li>
                # Bengal cats can suffer from a variety of eye diseases, most
                common diseases are Glaucoma, Entropion, and retinal problems.
                {/*} <br/> Joint problems <br />*/}
              </li>
              <li>
                # Patella Luxation is a joint problem where the knee joint falls
                in and out of place and it may require surgery.
                {/*<br/> Kidney disease */}
              </li>
              <li>
                # Most cats can be affected by kidney diseases caused by
                infections, blockages, tumours or toxins.
              </li>
            </ol>
          </h5>

          <div className={BreedInfoCSS.imgContainer2}>
            <img
              alt="headerImage"
              src={require("../images/Bengal-cat-health-problems-and-diseases.jpg")}
              width="500"
              height="auto"
            />
          </div>
        </div>
        <i>
          {" "}
          As always, be sure to consult with your vet regarding you cat's
          overall health and wellbeing.
        </i>
      </div>
    </div>
  );
};

/**************************************** Owner compatibility *********************************************************/
const OwnerCompatibility = () => {
  return (
    <div className={BreedInfoCSS.containerRowBox}>
      <div className={BreedInfoCSS.containerRow2}>
        <h1> Owner Compatibility </h1>
        <h3> _______________</h3>
        <p>
          If you're looking for a playful, smart, and a cat to have a genuine
          relationship with, Bengals are the ones for you!
          <br />
          <br />
          Bengal Cats are decedants of Asian Leapard Cats and are therefore very
          active and intelligent. They are also very alert and attentive.
          <br />
          Bengal cats also have a distinct personlaity and may sometimes have
          some attitude. But they could also be softies and crave affection.
        </p>
      </div>
      <div className={BreedInfoCSS.containerRow1}>
        {/*<h1 className={BreedInfoCSS.bold}> Pic of an active Cat </h1>*/}
        <div className={BreedInfoCSS.imgContainer}>
          <img
            alt="headerImage"
            src={require("../images/bengalcatleash.jpg")}
          />
          {/*} width = "600" height = "300" />*/}
        </div>
      </div>
    </div>
  );
};

const responsive = () => {
  const accordion = document.getElementsByClassName("contentBx");
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function (this: any) {
      this.toggle("active");
    });
  }
};

export default BreedInfo;
