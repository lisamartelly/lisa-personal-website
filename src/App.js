import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react';
import Homepage from './Homepage';
import ReturnResults from './ReturnResults';
import TransitWeather from './TransitWeather';
import FullMoonFanClub from './FullMoonFanClub';


const App = () => {
  return (
    <StrictMode>
        <BrowserRouter>
        <header>
          <Link to="/">Homepage</Link>
        </header>
          <Routes>
            {/* <Route path="/project/:id" element={<Project />} /> */}
            <Route path="/" element={<Homepage />}/>
            <Route path="/returning-research-results" element={<ReturnResults />}/>
            <Route path="/transit-weather-app" element={<TransitWeather />}/>
            <Route path="/full-moon-fan-club" element={<FullMoonFanClub />}/>
          </Routes>
        </BrowserRouter>
    </StrictMode>
  );
};


render(<App />, document.getElementById("root"));
