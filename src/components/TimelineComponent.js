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

  let showExtras;
  let navClass;
  let variant;
  let mobileResize;

  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 700px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener("change", updateSize);

    return function clean() {
      mq.removeEventListener("change", updateSize);
    };
  }, []);

  if (windowSize) {
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
 
  return (
    <Router>
      {mobileResize ?

        <Timeline position="alternate" style={{ width: '100%', padding:"20px" }}>



          <p className="text-center text-3xl" >
            A <b style={{ color: 'orange' }}>CloudFlare worker </b> is created. React site deployed to CloudFlare pages via <b>github</b>

          </p>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'x-large' }}
            >
              Financial endpoints established with
              <a href='https://polygon.io/' className="no-underline" style={{ color: 'purple', fontSize: 'large' }}> Polygon.io </a>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ color: 'black' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'purple', margin:"30px" }} >
                💸
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'x-large' }}>
                <b>gmdevstore.com</b>
              </Typography>
              <Typography style={{ fontSize: 'large' }}>Uses gmdevapi financial endpoints to update its stock & crypto UI cards</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="left"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'x-large' }}
            >
              Spotify endpoints established with
              <a href='https://developer.spotify.com/' className="no-underline" style={{ color: 'green', fontSize: 'large' }}> developer.spotify.com </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'lightgreen' }}>
                🎹
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'x-large' }}>
                <b>gmdevstore.com</b>
              </Typography>
              <Typography style={{ color: 'green', fontSize: 'large' }}>Spotify endpoints enable query select group of musician data</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'x-large' }}
            >
              Arduino endpoints established with
              <a href='https://cloud.arduino.cc/?gclid=CjwKCAjwkaSaBhA4EiwALBgQaJPfS_x_GSima_LReNflki1Z1CsvOfF9yd1A4JsZZkBSKklIkEW2AxoCpowQAvD_BwE' className="no-underline" style={{ color: 'teal', fontSize: 'large' }}> Arduino IOT CLOUD </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'lightblue', margin:"30px"  }}>
                📶
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'x-large' }}>
                <b>gmdevstore.com</b>
              </Typography>
              <Typography style={{ color: 'teal', fontSize: 'large' }}>Arduino endpoints control an irl IOT device circuit through a nano 33 controller.</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 'x-large' }}
            >
              MongoDB endpoints established with
              <a href='https://api.mongodb.com/' className="no-underline" style={{ color: 'darkgreen', fontSize: 'large' }}> api.mongodb.com's REST HTTP client </a>
            </TimelineOppositeContent>
            <TimelineSeparator style={{ color: 'green' }}>
              <TimelineConnector style={{ color: 'green' }} />
              <TimelineDot className=' text-3xl p-2' style={{ backgroundColor: 'black' }}>
                📃
              </TimelineDot>
              <TimelineConnector style={{ color: 'green' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'x-large' }}>
                <b>FSD.com</b>
              </Typography>
              <Typography style={{ color: 'darkgreen', fontSize: 'large' }}> Pulls data from MongoDB endpoints to fill content.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>

            <TimelineDot className=' text-3xl ' style={{ backgroundColor: 'grey' }}>

            </TimelineDot>
            <TimelineContent sx={{ py: '30px', px: 2 }}>
              <Typography component="span" style={{ fontSize: 'x-large' }}>

              </Typography>

            </TimelineContent>

          </TimelineItem>


        </Timeline>

        :

        <div style={{ width: '100%' }}>
          <Timeline position="alternate" style={{ width: '100%', }}>

            <p className="text-center" style={{ fontSize: 'medium' }}>
              A <b style={{ color: 'orange' }}>CloudFlare worker </b> is created. React site <br /> deployed to CloudFlare pages via <b>github</b>

            </p>

            <TimelineItem style={{ border: '3px solid purple', borderRadius: '10px', marginBottom: '10px', padding: '5px'}}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 'small' }}
              >
                Financial endpoints established with
                <a href='https://polygon.io/' className="no-underline" style={{ color: 'purple' }}> Polygon.io </a>
              </TimelineOppositeContent>

              <TimelineDot className=' text-2xl' style={{ backgroundColor: 'purple' }} >
                💸
              </TimelineDot>



            </TimelineItem>

            <TimelineItem style={{ marginBottom:"10px", border: '3px solid lightgreen', borderRadius: '10px', margin: '0px', padding: '0px'}}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="left"
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 'small' }}
              >
                Spotify endpoints established with
                <a href='https://developer.spotify.com/' className="no-underline" style={{ color: 'green' }}> developer.spotify.com </a>
              </TimelineOppositeContent>

              <TimelineDot className='text-xl ' style={{ backgroundColor: 'lightgreen', padding: '5px', margin: '5px' }}>
                🎹
              </TimelineDot>


            </TimelineItem>


            <TimelineItem style={{ border: '3px solid lightblue', borderRadius: '10px', marginBottom: '10px', padding: '5px'}}> 
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 'small' }}
              >
                Arduino endpoints established with
                <a href='https://cloud.arduino.cc/?gclid=CjwKCAjwkaSaBhA4EiwALBgQaJPfS_x_GSima_LReNflki1Z1CsvOfF9yd1A4JsZZkBSKklIkEW2AxoCpowQAvD_BwE' className="no-underline" style={{ color: 'teal' }}> Arduino IOT CLOUD </a>
              </TimelineOppositeContent>

              <TimelineDot className=' text-xl' style={{ backgroundColor: 'lightblue', padding: '5px', marginRight: '10px' }}>
                📶
              </TimelineDot>

            </TimelineItem>


            <TimelineItem style={{ border: '3px solid black', borderRadius: '10px', marginBottom: '10px', padding: '0px'}}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 'small' }}
              >
                MongoDB endpoints established with
                <a href='https://api.mongodb.com/' className="no-underline" style={{ color: 'darkgreen', fontSize: 'small' }}> api.mongodb.com's REST HTTP client </a>
              </TimelineOppositeContent>

              <TimelineDot className=' text-xl' style={{ backgroundColor: 'black', padding: '5px', margin: '10px' }}>
                📃
              </TimelineDot>

            </TimelineItem>


          </Timeline>
        </div>

      }

    </Router >
  )
}
