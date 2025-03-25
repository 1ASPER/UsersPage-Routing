import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import UsersList from './pages/UsersPage.jsx';
import DetailsPage from './pages/UserDetail.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Navigate replace to="/users" />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;