import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from './sidebar';
import MainContent from './mainContent';

const AnnaChatUI = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 🔁 sidebar state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      } else {
        setCheckingAuth(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (checkingAuth) return null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        style={{
          flex: 1,
          marginLeft: isSidebarOpen ? '220px' : '60px', // 💡 dynamic margin
          padding: '1rem',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <MainContent />
      </div>
    </div>
  );
};

export default AnnaChatUI;









