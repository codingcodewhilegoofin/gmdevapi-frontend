import * as React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useState, useEffect } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


export const TimelineComponent = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [windowSizeX, setwindowSizeX] = useState(window.innerWidth);

  let showExtras;
  let navClass;
  let variant;

  if (windowSizeX[0] < 700) {
    showExtras = false;
    navClass = 'scrolled-mobile';
    variant = 'dark';
  }
  else {
    showExtras = true;
    navClass = 'scrolled';
    variant = 'light';
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

  const [windowSizeY, setwindowSizeY] = useState(window.innerHeight);

  if (windowSizeY > 100) {
    console.log("bigger");

  }
  else {
    console.log("back");
  }

  useEffect(() => {

    function onScroll() {
      console.log(window.scrollY);
      setwindowSizeY(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>

      <Timeline position="alternate" style={{ width: '99%',  }}>

        <p className="text-center" >
          <b style={{color: 'orange'}}>CloudFlare worker </b> is created and front end deployed to CloudFlare pages via <b>github</b>

        </p>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Financial endpoints established with
            <a href='https://polygon.io/' className="no-underline" style={{ color: 'purple' }}> Polygon.io </a>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector style={{ color: 'blacks' }} />
            <TimelineDot className=' text-2xl' style={{ backgroundColor: 'purple' }} >
              💸
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography  component="span">
              <b>giomoscato.com</b>
            </Typography>
            <Typography>Uses gmdevapi financial endpoints to update its stock & crypto UI cards</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            variant="body2"
            color="text.secondary"
          >
            Spotify endpoints established with
            <a href='https://developer.spotify.com/' className="no-underline" style={{ color: 'green' }}> developer.spotify.com </a>
          </TimelineOppositeContent>
          <TimelineSeparator style={{ color: 'green' }}>
            <TimelineConnector style={{ color: 'green' }} />
            <TimelineDot className=' text-2xl' style={{ backgroundColor: 'lightgreen' }}>
              🎹
            </TimelineDot>
            <TimelineConnector style={{ color: 'green' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="span">
            <b>giomoscato.com</b>
            </Typography>
            <Typography style={{ color: 'green' }}>Spotify endpoints enable query of my music or any musican you like</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Arduino endpoints established with
            <a href='https://cloud.arduino.cc/?gclid=CjwKCAjwkaSaBhA4EiwALBgQaJPfS_x_GSima_LReNflki1Z1CsvOfF9yd1A4JsZZkBSKklIkEW2AxoCpowQAvD_BwE' className="no-underline" style={{ color: 'teal' }}> Arduino IOT CLOUD </a>
          </TimelineOppositeContent>
          <TimelineSeparator style={{ color: 'green' }}>
            <TimelineConnector style={{ color: 'green' }} />
            <TimelineDot className=' text-2xl' style={{ backgroundColor: 'lightblue' }}>
              📶
            </TimelineDot>
            <TimelineConnector style={{ color: 'green' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography  component="span">
             <b>giomoscato.com</b>
            </Typography>
            <Typography  style={{ color: 'teal',  }}>Arduino endpoints control an irl IOT device circuit through a nano 33 controller.</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            MongoDB endpoints established with
            <a href='https://api.mongodb.com/' className="no-underline" style={{ color: 'darkgreen' }}> api.mongodb.com's REST HTTP client </a>
          </TimelineOppositeContent>
          <TimelineSeparator style={{ color: 'green' }}>
            <TimelineConnector style={{ color: 'green' }} />
            <TimelineDot className=' text-xl' style={{ backgroundColor: 'black' }}>
              📃
            </TimelineDot>
            <TimelineConnector style={{ color: 'green' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography  component="span">
            <b>FSD.com</b>
            </Typography>
            <Typography style={{ color: 'darkgreen', }}> Pulls data from MongoDB endpoints to fill content.</Typography>
          </TimelineContent>
        </TimelineItem>


      </Timeline>

    </Router >
  )
}
