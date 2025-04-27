// components/donations/ImpactStats.jsx
"use client";
import styles from './ImpactStats.module.css';
import { useEffect, useState, useRef, use } from 'react';

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  
  const stats = [
    { number: 25000, label: 'Meals Donated', icon: '🍲' },
    { number: 1500, label: 'Families Helped', icon: '👨‍👩‍👧‍👦' },
    { number: 500, label: 'Volunteers', icon: '🙋‍♀️' },
    { number: 30, label: 'Communities Served', icon: '🏙️' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div className={styles.statsContainer} ref={statsRef}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <div className={styles.icon}>{stat.icon}</div>
          <div className={`${styles.number} ${isVisible ? styles.animate : ''}`}>
            {isVisible ? stat.number : 0}
          </div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
