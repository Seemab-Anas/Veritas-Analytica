import styles from '@/styles/HomeCompStyles/hero.module.css';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className={styles.page1}>
      <h1 className={styles.head1}>Mining the truth within your data</h1>
      <div className={styles.headAbout}>
        <p>Trusted Data-Driven AI Expertise to Empower Your Business</p>
        <Link href="/ContactUs"><button>Let's talk</button></Link>
      </div>
    </div>
  );
};

export default Hero;
