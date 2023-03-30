import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { DarkProvider } from './context/darkThemeContext';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import LayoutHeader from './component/LayoutHeader';

function App() {
  return (
    <div>
      <DarkProvider>
        <Router>
          <LayoutHeader />
          <Routes>
            {/* <Route
              path="/"
              element={<Navigate to={"/home"} />}
            /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </DarkProvider>
    </div>
  );
}

export default App;
