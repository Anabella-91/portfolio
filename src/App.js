import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className='app'>
    <Router>
    <Navbar />
    <Header />
    <About />
    <Tech />
    <Projects />
    <Contact />
    <Footer />
    </Router>
    </div>
  );
  }
}
export default App;
