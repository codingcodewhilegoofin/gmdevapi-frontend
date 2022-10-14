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
    <div className="App">
      <NavBar />
      <Banner />
      <TimelineBanner />
      <ProjectBanner />
      <EndpointsBanner/>
      <AboutBanner/>
      <Footer />
    </div>
  );
}

export default App;
