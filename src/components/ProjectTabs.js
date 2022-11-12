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
import { Popover, Transition } from '@headlessui/react';
import { Button } from 'bootstrap';

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
    //console.log(windowSizeX[0]);

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

      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: '100%' }}
        className="z-0 "
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChangeTabs}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'black' }}
          
        >
          <Tab label="GioMoscato.com" {...a11yProps(0)} />
          <Tab label="FSD" {...a11yProps(1)} />
          <Tab label="gmdevapi" {...a11yProps(2)} />
         
        </Tabs>
        <TabPanel  value={value} index={0}>
          A react web app for my personal portfolio <br/>
          <button class="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="https://giomoscato.com/#/">link</button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          A group web app developed to showcase an array of projects <br/>
          <button class="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="https://fullstackingdevelopment.com">link</button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          A multipurpose api to power my personal projects
        </TabPanel>
        
      </Box>
    </Router >
  )
}
