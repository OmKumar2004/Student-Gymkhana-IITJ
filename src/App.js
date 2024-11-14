import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';  
import AboutPage from './components/AboutUs';  
import NewsAndStoriesPage from './components/NewsAndStories';  
import EventsPage from './components/Events';  
import GalleryPage from './components/Gallery';  
import TeamPage from './components/Team';   
import ContactPage from './components/ContactUs';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import './App.css';
import Header from './components/headerpage';
import Footer from './components/footer';
import Noticeboard from './components/noticeboard';
// import signUp from './backend/signup';
import Sathi from './components/sathi';
function App() {
  return (
    <Router>
      <div className="App">
      <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news-and-stories" element={<NewsAndStoriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
          <Route path="/sathi" element={<Sathi/>} />
          {/* <Route path="/apis/v1/signup"/> */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
