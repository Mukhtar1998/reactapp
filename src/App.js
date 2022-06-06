import React from 'react'
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Counter from './pages/Counter';
import Calculator from './pages/Calculator';
import {
  Routes,
  Route
} from "react-router-dom";

// front end development
// how to create a react app
// creating components
// what a component is
// what a prop is
// how to create a prop
// how to use a prop inside a component
// how to use a prop to create dynamic content
// how to structure your files 
// how to installl dependencies to your react project using NPM (NEEDS CONSOLIDATION)
// how to create links which return components
// how to use STATE <--

function App() {
  return (
    	<div>
        <Nav/>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tools" element={<Tools />} />
            <Route exact path="/counter" element={<Counter />}/>
            <Route exact path="/calculator" element={<Calculator />} />

          </Routes>
        </div>
      </div>
  );
}

export default App;
