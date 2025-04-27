import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AgendaPage from './pages/AgendaPage/AgendaPage';
import ClientsPage from './pages/ClientsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Optional: for global styles

function App() {
  return (
    <div className="flex-grow-1">
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;