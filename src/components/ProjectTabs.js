import * as React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactLogo from '../assets/img/react-real.png';
import ElectronicsLogo from '../assets/img/Electronics site.png';
import ApiLogo from '../assets/img/Api logo.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography className="m-0 font-bold">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export const ProjectTabs = () => {

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  let showExtras;
  let navClass;
  let variant;
  let direction;
  let tabBorder;

  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 1000px)");
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
    navClass = 'scrolled-mobile';
    variant = 'dark';
    direction = "column";
    tabBorder = " 1px 0px 0px 0px solid white";
  }
  else {
    showExtras = true;
    navClass = 'scrolled';
    variant = 'light';
    direction = "row";
    tabBorder = " none";
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>

      <Box
        sx={{ flexGrow: 1, bgcolor: 'black', display: 'flex', width: '100%', flexDirection: `${direction}` }}
        className="z-0 "
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChangeTabs}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'black' }}

          >

            <Tab label="gmdevstore" {...a11yProps(0)} className="bg-black text-white p-4"  />
            <Tab label="FSD" {...a11yProps(1)} className="bg-black text-white p-4"  />
            <Tab label="gmdevapi" {...a11yProps(2)} className="bg-black text-white p-4"   />
            <Tab label="Nano33IOT" {...a11yProps(3)} className="bg-black text-white p-4"  />
            <Tab label="..." {...a11yProps(4)} className="bg-black text-white p-4"   />


          </Tabs>
        </div>
        <TabPanel value={value} index={0} width="100%">
          <div style={{ textAlign: 'center', color: 'white', fontSize: 'medium', padding: '50px', border: '1px solid white', display:'flex',flexDirection: 'column', width: '100%' }}>
            A react web app for my personal portfolio <br />
            <img class="object-contain h-48 w-96 p-2" src={ReactLogo}></img>
            <button class="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"><a href="https://gmdevstore.com/#/" className="text-white" >gmdevstore.com</a></button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ textAlign: 'center', color: 'white', fontSize: 'medium', padding: '50px', border: '1px solid white' }}>

            A group web app developed <br />to showcase an array of projects <br />
            <button class="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"><a href="https://fullstackingdevelopment.com" className="text-white" >link </a></button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={{ textAlign: 'center', color: 'white', fontSize: 'medium', padding: '50px', border: '1px solid white' }}>
         
            A multipurpose api <br />to power my personal projects
            <img class="object-contain h-48 w-96 p-2" src={ApiLogo}></img>
            <button class="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"><a href="https://gmdevapi.com/#/" className="text-white" >gmdevapi.com</a></button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={{ textAlign: 'center', color: 'white', fontSize: 'medium', padding: '50px', border: '1px solid white' }}>
            Arduino Nano 33 IOT microcontroller <br />with custom circuit design <br />to indicate API availability and control IRL objects<br />
            <img class="object-contain h-48 w-96 p-2" src={ElectronicsLogo}></img>
            <button class="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"><a href="https://gmdevelectronics.wixsite.com/blog" className="text-white" >gmdevelectronics.com</a></button>
          </div>
        </TabPanel>

        <TabPanel value={value} index={4} >
          <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>

          </div>
        </TabPanel>

      </Box>
    </Router >
  )
}
