// src/landing-page/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../auth/firebase';
import profileImg from '../assets/profile.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in user:', user.displayName, user.email);
      // Redirect to chat page
      navigate('/chat');
    } catch (error) {
      console.error('Google Login failed:', error.message);
      // TODO: show user-visible error message
    }
  };

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: '#fdfdfd',
      color: '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', flex: 1 }}>
        <h1 className="animated-title" style={{
          fontSize: '4rem',
          fontWeight: 900,
          textAlign: 'center',
          background: 'linear-gradient(90deg, maroon, goldenrod)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Ask Anna
        </h1>

        <img
          src={profileImg}
          alt="Ask Anna Symbol"
          style={{ display: 'block', margin: '2rem auto', width: '200px', height: '200px' }}
        />

        <button
          onClick={handleLogin}
          aria-label="Login with Google"
          style={{
            display: 'block',
            margin: '2rem auto',
            padding: '1rem 2rem',
            backgroundColor: 'maroon',
            color: 'white',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, backgroundColor 0.3s'
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = '#8b0000';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'maroon';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Login with Google
        </button>

        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#222', marginBottom: '1rem' }}>About</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
            Ask Anna is your friendly IIT Madras senior — always available to help you find mess menus, club activities, course schedules, hostel rules, and all things happening on campus. Whether you’re a fresher finding your way around or a final-year student juggling deadlines, just Ask Anna!

            This AI-powered assistant is designed to feel like you're talking to a helpful senior who knows the campus inside out. With real-time updates, natural language queries, and personalized suggestions, Ask Anna makes it easier to get the information you need — fast, friendly, and fuss-free.

            Whether you're looking for today's lunch menu at Himalaya, the next Shaastra event, or your course timetable, Ask Anna is here to guide you — just like a real Anna would.
          </p>
        </div>
      </div>

      <footer style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '1rem 0',
        textAlign: 'center',
        borderTop: '2px solid maroon',
        width: '100%',
        fontSize: '0.9rem'
      }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ margin: 0, color: 'goldenrod' }}>Contact Us</h2>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <h3 style={{ margin: '0 0 0.3rem', color: 'goldenrod' }}>Naveen</h3>
            <p style={{ margin: 0 }}>📞 <a href="tel:8124468339" style={{ color: '#fff', textDecoration: 'none' }}>8124468339</a></p>
            <p style={{ margin: 0 }}>✉️ <a href="mailto:ce22b078@smail.iitm.ac.in" style={{ color: '#fff', textDecoration: 'none' }}>ce22b078@smail.iitm.ac.in</a></p>
          </div>
          <div>
            <h3 style={{ margin: '0 0 0.3rem', color: 'goldenrod' }}>Vetrei</h3>
            <p style={{ margin: 0 }}>📞 <a href="tel:7904717010" style={{ color: '#fff', textDecoration: 'none' }}>7904717010</a></p>
            <p style={{ margin: 0 }}>✉️ <a href="mailto:ce22b010@smail.iitm.ac.in" style={{ color: '#fff', textDecoration: 'none' }}>ce22b010@smail.iitm.ac.in</a></p>
          </div>
        </div>
        <div style={{ marginTop: '0.8rem', fontSize: '0.75rem', color: '#bbb' }}>
          &copy; 2025 Ask Anna — All Rights Reserved
        </div>
      </footer>

      <style>
        {`
          @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animated-title {
            animation: popIn 1.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;


