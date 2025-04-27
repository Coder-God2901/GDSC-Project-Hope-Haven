// components/common/Card.jsx
import styles from './Card.module.css';

export default function Card({ children, className }) {
  return (
    <div className={`card ${styles.card} ${className || ''}`}>
      {children}
    </div>
  );
}
