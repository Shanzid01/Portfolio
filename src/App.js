import React from 'react';
import HelloWorld from './containers/helloWorld';
import Projects from './containers/projects';
import Testimonial from './containers/testimonial';
import Tools from './containers/tools';
import Contact from './containers/contact';
import Footer from './containers/footer';
import './style/app.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Projects />
      <Testimonial />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
