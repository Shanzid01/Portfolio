import React from 'react';
import HelloWorld from './containers/helloWorld';
import Projects from './containers/projects';
import Testimonial from './containers/testimonial';
import Tools from './containers/tools';
import './style/app.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Projects />
      <Testimonial />
      <Tools />
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}
export default App;
