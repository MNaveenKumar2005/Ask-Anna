// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/index';
import AnnaChatUI from './AnnaChatUI/index';   
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<AnnaChatUI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


