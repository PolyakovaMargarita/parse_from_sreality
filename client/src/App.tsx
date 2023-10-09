import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Layout from './components/layout/Layout';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
