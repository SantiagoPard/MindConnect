import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllResourcesPage from './pages/AllResourcesPage';

function App() {
  console.log("hola")
  return ( 
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recursos" element={<AllResourcesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;