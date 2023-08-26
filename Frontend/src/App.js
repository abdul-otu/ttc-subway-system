import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from './pages/Home';
import Lines from './pages/Lines';
import Stations from './pages/Stations';
import Customer from "./pages/Customer";
import About from './pages/About';
import Tweets from './pages/Tweets';
import TheViews from "./pages/TheViews";
import TheViews1 from "./pages/TheViews1";
import TheViews2 from "./pages/TheViews2";
import TheViews3 from './pages/TheViews3';
import TheViews4 from "./pages/TheViews4";
import TheViews5 from "./pages/TheViews5";
import TheViews6 from "./pages/TheViews6";
import TheViews7 from "./pages/TheViews7";
import TheViews8 from "./pages/TheViews8";
import TheViews9 from "./pages/TheViews9";
import TheViews10 from "./pages/TheViews10";

const App = () => {
  useEffect(() => {
    document.title = "STOP!"
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="pages">
          
          <Routes>
            <Route
              path="/"
              element={<Home />} 
            />
            <Route
              path="/Lines"
              element={<Lines />}
            />
            <Route
              path="/Stations"
              element={<Stations />}
            />
            <Route
              path="/Customer"
              element={<Customer />}
            />
            <Route
              path="/About"
              element={<About />}
            />
            <Route
              path="/Tweets"
              element={<Tweets />}
            />
            <Route
              path="/TheViews"
              element={<TheViews />}
            />
            <Route
              path="/TheViews1"
              element={<TheViews1 />}
            />
            <Route
              path="/TheViews2"
              element={<TheViews2 />}
            />
            <Route
              path="/TheViews3"
              element={<TheViews3 />}
            />
            <Route
              path="/TheViews4"
              element={<TheViews4 />}
            />
            <Route
              path="/TheViews5"
              element={<TheViews5 />}
            />
            <Route
              path="/TheViews6"
              element={<TheViews6 />}
            />
            <Route
              path="/TheViews7"
              element={<TheViews7 />}
            />
            <Route
              path="/TheViews8"
              element={<TheViews8 />}
            />
            <Route
              path="/TheViews9"
              element={<TheViews9 />}
            />
            <Route
              path="/TheViews10"
              element={<TheViews10 />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;