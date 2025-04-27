// components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Hope Haven
        </Link>
        
        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/main/about" className={styles.navLink}>About</Link>
          <Link href="/donations/donate" className={styles.navLink}>Donate</Link>
          <Link href="/main/impact" className={styles.navLink}>Impact</Link>
          <Link href="/main/contact" className={styles.navLink}>Contact</Link>
        </div>
        
        <Link href="/donations/donate" className="btn btn-primary">
          Donate Now
        </Link>
        
        <div 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}