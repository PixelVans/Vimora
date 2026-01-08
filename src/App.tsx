import {  Routes, Route } from 'react-router-dom';

import Blogs from '@pages/BlogsPage';
import BlogPostPage from '@pages/BlogPostPage'; 
import ComparisonPage from '@pages/ComparisonPage';
import MeaningPage from '@pages/MeaningPage';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Index from './pages';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} /> 
        <Route path="/comparison" element={<ComparisonPage />} /> 
        <Route path="/meaning" element={<MeaningPage />} />
      </Routes>
   
  );
}

export default App;
