import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import Navbar from './Components/Navbar/Navbar';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import DoctorBook from './Components/DoctorCard/DoctorBook';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import { Landing_Page } from './Components/Landing_Page/LandingPage';


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Notification>
      
      <Routes>

         <Route path='/' element={<Landing_Page/>}/>

        <Route path="/signup" element={<SignUp />} /> {/* Define the route for Sign Up */}

        <Route path="/login" element={<Login />} /> {/* Define the route for Login */}

        <Route path="/instant-consultation" element={<InstantConsultation/>} /> {/* Define the route for Login */}

        <Route path='/finddoctor' element={<FindDoctorSearch/>}/>
        
        <Route path="/search/doctors" element={<DoctorBook/>} />

        <Route path='/reviews' element={<ReviewForm/>}/>


        <Route path='/profile' element={<ProfileForm/>} />
        
        <Route path='/reports' element={<ReportsLayout/>} />

      </Routes>

      </Notification>

    </BrowserRouter>
  );
}

export default App;

// Define Home, Appointments, HealthBlog, and Reviews components as needed.
