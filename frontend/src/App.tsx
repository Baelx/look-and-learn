import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dictionary from './pages/Dictionary';
import Learn from './pages/Learn';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dictionary />} />
        <Route path="learn" element={<Learn />} />
        <Route path="profile" element={<Profile /> } />
      </Route>
    </Routes>
  );
}

export default App;
