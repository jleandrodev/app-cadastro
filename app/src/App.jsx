import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Update from './pages/Update';
import NotFound from './pages/NotFound';




function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/:id' element={<Update />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    
  );
}

export default App;