import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import Searchpage from './Components/Searchpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/newchat" element={<Searchpage />} />
      </Routes>
    </Router>
  );
}

export default App;
