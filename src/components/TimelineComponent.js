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
  let mobileResize;

  if (windowSizeX[0] < 700) {
    showExtras = false;
    mobileResize = false;
    navClass = 'scrolled-mobile';
    variant = 'dark';
  }
  else {
    showExtras = true;
    mobileResize = true;
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
      {mobileResize ?

        <Timeline position="alternate" style={{ width: '100%', }}>

          

          <p className="text-center text-3xl" >
            <b style={{ color: 'orange' }}>CloudFlare worker </b> is created and front-end deployed to CloudFlare pages via <b>github</b>

          </p>
          

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{fontSize:'x-large'}}
            >
              Financial endpoints established with
              <a href='https://polygon.io/' className="no-underline" style={{ color: 'purple' , fontSize:'large' }}> Polygon.io </a>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ color: 'black' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'purple' }} >
                💸
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span"  style={{fontSize:'x-large'}}>
                <b>giomoscato.com</b>
              </Typography>
              <Typography  style={{fontSize:'large'}}>Uses gmdevapi financial endpoints to update its stock & crypto UI cards</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="left"
              variant="body2"
              color="text.secondary"
              style={{fontSize:'x-large'}}
            >
              Spotify endpoints established with
              <a href='https://developer.spotify.com/' className="no-underline" style={{ color: 'green' ,fontSize:'large' }}> developer.spotify.com </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'lightgreen' }}>
                🎹
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span"  style={{fontSize:'x-large'}}>
                <b>giomoscato.com</b>
              </Typography>
              <Typography style={{ color: 'green' , fontSize: 'large'}}>Spotify endpoints enable query of my music or any musican you like</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{fontSize:'x-large'}}
            >
              Arduino endpoints established with
              <a href='https://cloud.arduino.cc/?gclid=CjwKCAjwkaSaBhA4EiwALBgQaJPfS_x_GSima_LReNflki1Z1CsvOfF9yd1A4JsZZkBSKklIkEW2AxoCpowQAvD_BwE' className="no-underline" style={{ color: 'teal', fontSize:'large' }}> Arduino IOT CLOUD </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'lightblue' }}>
                📶
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span"  style={{fontSize:'x-large'}}>
                <b>giomoscato.com</b>
              </Typography>
              <Typography style={{ color: 'teal', fontSize:'large' }}>Arduino endpoints control an irl IOT device circuit through a nano 33 controller.</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{fontSize:'x-large'}}
            >
              MongoDB endpoints established with
              <a href='https://api.mongodb.com/' className="no-underline" style={{ color: 'darkgreen', fontSize: 'large'}}> api.mongodb.com's REST HTTP client </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'black' }}>
                📃
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span"  style={{fontSize:'x-large'}}>
                <b>FSD.com</b>
              </Typography>
              <Typography style={{ color: 'darkgreen', fontSize: 'large'}}> Pulls data from MongoDB endpoints to fill content.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
          
              <TimelineDot className=' text-3xl ' style={{ backgroundColor: 'grey' }}>
                
              </TimelineDot>
              <TimelineContent sx={{ py: '30px', px: 2 }}>
              <Typography component="span"  style={{fontSize:'x-large'}}>
                
              </Typography>

            </TimelineContent>
           
          </TimelineItem>


        </Timeline>

        :

        <Timeline position="alternate" style={{ width: '100%', }}>

          <p className="text-center"  style={{ fontSize: 'small'}}>
            <b style={{ color: 'orange' }}>CloudFlare worker </b> is created and front end <br/> deployed to CloudFlare pages via <b>github</b>

          </p>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'small'}}
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
            <TimelineContent sx={{ py: '12px', px: 2  }}>
              <Typography component="span" style={{ fontSize: 'small'}}>
                <b>giomoscato.com</b>
              </Typography>
              <Typography style={{ fontSize: 'small'}}>Uses gmdevapi financial endpoints <br/>to update its stock & crypto UI cards</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="left"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'small'}}
            >
              Spotify endpoints established with
              <a href='https://developer.spotify.com/' className="no-underline" style={{ color: 'green' }}> developer.spotify.com </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className='text-2xl ' style={{ backgroundColor: 'lightgreen', padding: '5px', margin: '0px' }}>
                
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'small'}}>
                <b>giomoscato.com</b>
              </Typography>
              <Typography style={{ color: 'green' , fontSize: 'small'}}>Spotify endpoints enable query <br/> of my music or any musican you like</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'small'}}
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
              <Typography component="span" style={{ fontSize: 'small'}}>
                <b>giomoscato.com</b>
              </Typography>
              <Typography style={{ color: 'teal', fontSize: 'small'}}>Arduino endpoints control an irl IOT device circuit through a nano 33 controller.</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'small'}}
            >
              MongoDB endpoints established with
              <a href='https://api.mongodb.com/' className="no-underline" style={{ color: 'darkgreen', fontSize: 'small'}}> api.mongodb.com's REST HTTP client </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-xl' style={{ backgroundColor: 'black' }}>
                
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'small'}}>
                <b>FSD.com</b>
              </Typography>
              <Typography style={{ color: 'darkgreen', fontSize: 'small'}}> Pulls data from MongoDB endpoints to fill content.</Typography>
            </TimelineContent>
          </TimelineItem>


        </Timeline>

      }

    </Router >
  )
}
