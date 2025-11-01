import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<h1 className='text-center mt-20 text-2xl'>Welcome to Home Page</h1>} />*/}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App