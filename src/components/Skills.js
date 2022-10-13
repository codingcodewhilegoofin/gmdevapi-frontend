import skill1 from "../assets/img/frontendlogo.png";
import skill2 from "../assets/img/backendlogo2.png";
import skill3 from "../assets/img/databaselogo3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">

              <h2>Our Developer Skillset</h2>
              <p>Our team is experienced in a range of programming applications.<br></br>
                FSD.com is a full stack website utilizing alot of our skillset, built in the React JS framework.
              </p>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>Front End Development</h5>
                </div>

                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>Back End Development</h5>
                </div>

                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>Database Development</h5>
                </div>

                <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>AI Development</h5>
                </div>

              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
