import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShortenUrlForm from './components/ShortenUrlForm';
import RedirectFromSlug from './components/RedirectFormSlug';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenUrlForm />} />
        <Route path="/:slug" element={<RedirectFromSlug />} />
      </Routes>
    </Router>
  );
};

export default App;
