// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Homepage from './components/Homepage';
import ListPage from './components/ListPage';
import DetailsPage from './components/DetailsPage';
import DeletePage from './components/DeletePage';
import AddEditPage from './components/AddEditPage';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/students" element={<ListPage />} />
        <Route path="/students/add" element={<AddEditPage />} />
        <Route path="/students/edit/:id" element={<AddEditPage />} />
        <Route path="/students/:id" element={<DetailsPage />} />
        <Route path="/students/delete/:id" element={<DeletePage />} />
      </Routes>
    </Router>
  );
};

export default App;

