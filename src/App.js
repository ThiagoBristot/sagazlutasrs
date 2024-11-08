import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Classes from './components/Classes';
import ScheduleForm from './components/ScheduleForm';
import Footer from './components/Footer'

const App = () => (
  <div className='app'>
    <Navbar />
    <div className="container">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="classes">
        <Classes />
      </section>
      <section id="schedule">
        <ScheduleForm />
      </section>
    </div>
    <Footer/>
  </div>
);

export default App;
