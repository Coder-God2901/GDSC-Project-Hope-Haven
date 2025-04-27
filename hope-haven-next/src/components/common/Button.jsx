// components/common/Button.jsx
import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className 
}) {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
