import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Education from './pages/education';
import WorkHistory from './pages/work-history';
import TechStack from './pages/tech-stack';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/work-history" element={<WorkHistory />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);