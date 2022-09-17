import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import FSDlogo from '../assets/img/FSDLogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>

     

      <Navbar style={{padding: '2px'}} variant="light" bg={'light'}  expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Brand href="/">
            <img src={FSDlogo} alt="Logo" />
          </Navbar.Brand>
          
          <p> Huge thank you to <b>@judygab</b> <br/><a href="https://github.com/judygab/web-dev-projects" target="_blank">github.com/judygab/web-dev-projects</a><br/>For this website inspiration </p>
        

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span  className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Contribute</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Code together!</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </Router >
  )
}
