import * as React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const EndpointsComponent = () => {


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

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Router>

      <p className="mb-5 text-5xl text-green-300"> Spotify</p>

      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Get gio's personal music data</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Spotify
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Get any spotify artist's data via search by ID</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Spotify/:artistID
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

      <p className="mt-5 mb-5 text-5xl text-blue-300"> Arduino </p>

      <div>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}> Turn on the LED and circuit of microcontroller</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Arduino/ToggleON
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Turn off the LED and circuit of microcontroller</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Arduino/ToggleOFF
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Get the current status of the board</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Arduino/STATUS
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Test if the website is ready to recieve API requests</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Arduino/TestConnection
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

      <p className="mt-5 mb-5 text-5xl text-gray-400"> Finance </p>

      <div>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}> Get stock data based on symbol, date, & adjustment</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            /api/Stock/:symbol/:date/:adjusted
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Get cypto data based on ticker & adjustment</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Crypto/:cryptoTicker/:adjusted
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Get NFT data and assets based on collectionName</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Nft/:collectionName
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}>Debt data provided by US Treasury</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              /api/Gov
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>


      <p className="mt-5 mb-5 text-5xl text-green-600"> MongoDB </p>

      <div>
        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'lightgreen' }}>GET</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}> Get all data</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             /api/Mongo
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'Purple' }}>POST</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}> Create a new entry</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             /api/MongoCreate
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'darkgreen' }}>PUT</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}> Update entry</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             /api/MongoUpdate
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: 'red' }}>DELETE</Typography>
            <Typography sx={{ color: 'black', marginLeft: '10px' }}> Delete entry</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             /api/MongoDelete
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

    </Router >
  )
}
