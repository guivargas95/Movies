import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import './index.css'
import MoviePage from './pages/moviePage';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moviepage" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)