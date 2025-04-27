// components/donations/DonationTracker.jsx
import { useState, useEffect } from 'react';
import styles from './DonationTracker.module.css';

export default function DonationTracker({ current, goal, label }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const percentage = (current / goal) * 100;
    setTimeout(() => {
      setProgress(percentage > 100 ? 100 : percentage);
    }, 500);
  }, [current, goal]);
  
  return (
    <div className={styles.tracker}>
      <div className={styles.label}>{label}</div>
      <div className={styles.amounts}>
        <span className={styles.current}>${current.toLocaleString()}</span>
        <span className={styles.goal}>of ${goal.toLocaleString()}</span>
      </div>
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
