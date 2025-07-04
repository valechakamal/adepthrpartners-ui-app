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
        <Home />
        <AboutUs />
        <Solutions/>
        <Clients />
        <Contactus />
      <Footer />
    </div>
  );
}

export default App;
