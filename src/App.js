import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ProjectBanner } from "./components/ProjectBanner.js";
import { Footer } from "./components/Footer.js";
import { TimelineBanner } from "./components/TimelineBanner.js";
import { EndpointsBanner } from './components/EndpointsBanner';
import { AboutBanner } from './components/AboutBanner';


function App() {
  return (
    <>
      <NavBar />

      <div
        className="App"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        
          justifyContent: 'space-evenly',
          alignsSelf: 'center',
        }}>



        <div style={{ alignSelf: 'center', flexDirection: 'column',display: 'flex', width: '99%', height: '100%',  }}>

          <Banner />
        </div>

        <div style={{ alignSelf: 'center', flexDirection: 'column', display: 'flex', width: '99%', height: '100%',  }}>
          <TimelineBanner />
          <ProjectBanner />
          <EndpointsBanner />

          <AboutBanner />
        </div>


        <Footer />
      </div>
    </>
  );
}

export default App;
