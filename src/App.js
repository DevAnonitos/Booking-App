// React & Router V6
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import Home from "./pages/home/Home";
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import 'animate.css';

function App() {

  return (
    // Route page 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
