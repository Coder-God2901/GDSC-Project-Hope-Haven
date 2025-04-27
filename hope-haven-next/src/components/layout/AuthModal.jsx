// components/common/AuthModal.jsx
import { useState } from 'react';
import styles from './AuthModal.module.css';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  
  if (!isOpen) return null;
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.header}>
          <h2>{mode === 'login' ? 'Welcome Back' : 'Join Hope Haven'}</h2>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${mode === 'login' ? styles.active : ''}`}
              onClick={() => setMode('login')}
            >
              Login
            </button>
            <button 
              className={`${styles.tab} ${mode === 'register' ? styles.active : ''}`}
              onClick={() => setMode('register')}
            >
              Register
            </button>
          </div>
        </div>
        
        <div className={styles.content}>
          {mode === 'login' ? (
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="email" id="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="password" id="password" required />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit" className={styles.submitButton}>
                Sign In
              </button>
              <div className={styles.forgotPassword}>
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          ) : (
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" id="name" required />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="email" id="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="password" id="password" required />
                <label htmlFor="password">Password</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="password" id="confirmPassword" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <button type="submit" className={styles.submitButton}>
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
