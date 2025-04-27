// components/layout/MainContent.jsx
import styles from './MainContent.module.css';
import Card from '../common/Card';
import ImpactStats from '../donations/ImpactStats';
import DonationTracker from '../donations/DonationTracker';
import Link from 'next/link';


export default function MainContent() {
  const howItWorks = [
    {
      icon: '🔍',
      title: 'Find a Cause',
      description: 'Browse through our list of causes and find one that resonates with you.'
    },
    {
      icon: '💰',
      title: 'Make a Donation',
      description: 'Contribute any amount to support those in need. Every dollar makes a difference.'
    },
    {
      icon: '❤️',
      title: 'Create Impact',
      description: 'Your donation directly helps provide meals and support to families in need.'
    }
  ];

  const successStories = [
    {
      image: '/images/story1.jpg',
      name: 'The Johnson Family',
      quote: 'Hope Haven provided our family with nutritious meals during our most difficult time.',
      location: 'Chicago, IL'
    },
    {
      image: '/images/story2.jpg',
      name: 'Community Pantry',
      quote: "With Hope Haven's support, our pantry now serves over 200 families weekly.",
      location: 'Boston, MA'
    },
    {
      image: '/images/story3.jpg',
      name: 'School Lunch Program',
      quote: 'Over 500 children now receive nutritious lunches thanks to your generosity.',
      location: 'Denver, CO'
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.missionSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            At Hope Haven, we believe that access to quality food is a fundamental right. 
            Our mission is to bridge the gap between abundance and need, creating a community 
            where everyone has access to nutritious meals served with dignity and respect.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <ImpactStats />
          <DonationTracker 
            current={75000} 
            goal={100000} 
            label="Monthly Donation Goal" 
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className="grid">
            {howItWorks.map((item, index) => (
              <Card key={index} className={styles.howItWorksCard}>
                <div className={styles.howItWorks}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.successStoriesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div className={styles.carousel}>
            {successStories.map((story, index) => (
              <div key={index} className={styles.testimonial}>
                <div 
                  className={styles.testimonialImage} 
                  style={{ backgroundImage: `url(${story.image})` }}
                ></div>
                <div className={styles.testimonialContent}>
                  <p className={styles.quote}>"{story.quote}"</p>
                  <p className={styles.name}>{story.name}</p>
                  <p className={styles.location}>{story.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Your contribution can change lives. Join us in our mission today.</p>
          <Link href="/donations/donate" className="btn btn-primary btn-lg">
            Donate Now
          </Link>
        </div>
      </section>
    </main>
  );
}
