import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/Header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

const App = () => (
  <div>
    <Navigation />
    <Header data={JsonData.Header} />
    <Features data={JsonData.Features} />
    <About data={JsonData.About} />
    <Services data={JsonData.Services} />
    <Gallery />
    <Testimonials data={JsonData.Testimonials} />
    <Team data={JsonData.Team} />
    <Contact data={JsonData.Contact} />
  </div>
);

export default App;
