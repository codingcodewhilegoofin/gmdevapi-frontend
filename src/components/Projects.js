import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import projGioImg1 from "../assets/img/projImgGio.png";
import projGioImg2 from "../assets/img/projImgGio2.png";
import projGioImg3 from "../assets/img/projImgGio3.png";
import fsdLogo from "../assets/img/FSDLogo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import bannerImg from "../assets/img/banner-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const [windowSizeX, setwindowSizeX] = useState(window.innerWidth);

  let showExtras;
  let typingAnimation;;
  let bannerOffset;
  let tagline;
  let devDescription;

  if (windowSizeX[0] < 700) {
    showExtras = false;
    typingAnimation = 'wrap-mobile';
    bannerOffset = 'banner-mobile';
    tagline = 'tagline-mobile';
    devDescription = 'p-mobile';
  }
  else {
    showExtras = true;
    typingAnimation = 'wrap';
    bannerOffset = 'banner';
    tagline = 'tagline';
    devDescription = 'p';
  }

  useEffect(() => {

    function updateSize() {
      setwindowSizeX([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    console.log(windowSizeX[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSizeX])

  const personalProjects = [
    {
      title: "Antonio Ericks Project",
      description: "Design & Development",
      imgUrl: fsdLogo,
      webLink: ""
    },
    {
      title: "Giomoscato.com",
      description: "Developed a React portfolio application to demonstrate core web & coding skills, api implementations, and 3D interfaces.",
      imgUrl: projGioImg1,
      webLink: "https://giomoscato.com/#/"
    },

  ];

  const featuredProjects = [
    {
      title: "Hello",
      description: "Design & Development",
      imgUrl: fsdLogo,
    },
    {
      title: "Giomoscato.com",
      description: "Developed a React portfolio application to demonstrate core web & coding skills, api implementations, and 3D interfaces.",
      imgUrl: projGioImg1,
    },
    {
      title: "CloudFlare Worker API",
      description: "The GMAapi ( Gio M apps API ) was build with the purpose of security, re-usability, and ease in mind. It is part of our project ecosystem and was originally developed for FSD / GMA applications. We made the API available publically as a proof of concept and ease of use.",
      imgUrl: projGioImg2,
    },

  ];

  const projects = [
    {
      title: "Antonio Ericks Project",
      description: "Design & Development",
      imgUrl: fsdLogo,
    },
    {
      title: "Giomoscato.com",
      description: "Developed a React portfolio application to demonstrate core web & coding skills, api implementations, and 3D interfaces.",
      imgUrl: projGioImg1,
    },
    {
      title: "CloudFlare Worker API",
      description: "The GMAapi ( Gio M apps API ) was build with the purpose of security, re-usability, and ease in mind. It is part of our project ecosystem and was originally developed for FSD / GMA applications. We made the API available publically as a proof of concept and ease of use.",
      imgUrl: projGioImg2,
    },
    {
      title: "FSD Mongo Database",
      description: "Database used in this website to pull application and project data from. Used in our projects.",
      imgUrl: projGioImg3,
    },
    {
      title: "Other",
      description: "Design & Development",
      imgUrl: fsdLogo,
    },
    {
      title: "Other",
      description: "Design & Development",
      imgUrl: fsdLogo,
    },
  ];

  return (
    <section className="project " id="projects">

      <Container>
        <Row>
          <Col size={12}>

            <div className="animate__animated animate__fadeIn z-30">
              <h2>Projects</h2>
              <p>Projects that our team is currently working on or completed. This includes team based projects as well as personal.</p>

              <Tab.Container id="projects-tabs" defaultActiveKey="first">

                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                  <Nav.Item>
                    <Nav.Link eventKey="first">Featured Projects</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="third">All Projects</Nav.Link>
                  </Nav.Item>

                </Nav>

                <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>

                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        featuredProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        personalProjects.map((project, index) => {
                          return (

                            <ProjectCard
                              key={index}
                              {...project}
                            />

                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>

                </Tab.Content>
              </Tab.Container>
            </div>

          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
