import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing_Page/Landing_Page';

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
