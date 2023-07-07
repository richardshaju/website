import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import License from './License';
function App() {

  return (
    <div className="App"  style={{ background: '#0000' }}>
      <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route  path="/license" element={<License />} />
          </Routes>
        </Router> 
    </div> 

  );
}

export default App;
