import React from 'react';
import './App.css';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import AboutUs from './components/aboutus.jsx';
import Solutions from './components/solutions.jsx';
import Clients from './components/clients.jsx';
import Contactus from './components/contactus.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
        <div id="home">
          <Home />
        </div>
        <div id="aboutus">
          <AboutUs />
        </div>
        <div id="solutions">
          <Solutions />
        </div>
        <div id="clients">
          <Clients />
        </div>
        <div id="contact">
          <Contactus />
        </div>
      <Footer />
    </div>
  );
}

export default App;
