import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SignUp from './Sign_Up/Sign_Up'; // Corrected import path and component name
import Login from './Login/Login';
import LandingPage from './Landing_Page/Landing_Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landingpage" element={<LandingPage />} />

          {/* Define other routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
