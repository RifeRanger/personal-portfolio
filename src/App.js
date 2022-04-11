import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Resume from './components/Resume';
import Past from './components/Past';
import Present from './components/Present';
import Future from './components/Future';
import NavBar from './components/NavBar';

const App = () => {
  
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Suspense fallback={<div> Loading... </div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/past" element={<Past />}/ >
            <Route exact path="/present" element={<Present />} />
            <Route exact path='/future' element={<Future />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
};

export default App;