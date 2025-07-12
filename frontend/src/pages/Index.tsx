
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      navigate(`/${userRole}`);
    } else {
      navigate('/');
    }
  }, [navigate]);

  return null;
};

export default Index;
