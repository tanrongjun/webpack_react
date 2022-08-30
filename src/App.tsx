import React from 'react'
import { Routes, Route } from "react-router-dom";

import './index.less'
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <div>App</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
