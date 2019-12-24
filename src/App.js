import React from 'react';
import HelloWorld from './containers/helloWorld';
import Projects from './containers/projects';
import './style/app.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Projects />
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}
export default App;
