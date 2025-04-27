import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Shared/Button/Button'; // Adjust the path if necessary

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button onClick={goToHomePage} style={{ marginTop: '100px' }}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage;