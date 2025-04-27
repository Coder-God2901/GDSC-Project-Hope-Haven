// components/layout/Hero.jsx
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Nourishing Communities with Dignity</h1>
        <p className={styles.subtitle}>Join our mission to provide quality food to those in need</p>
        <Link href="/donations/donate" className={`btn btn-primary btn-lg ${styles.cta}`}>
          Make a Difference
        </Link>
      </div>
    </section>
  );
}
