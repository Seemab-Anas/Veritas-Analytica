import styles from '@/styles/ServicesCompStyles/hero.module.css';
import Link from 'next/link';

const Hero = ({ videoSrc, title, description }) => {
  return (
    <div className={styles.page}>
      <img className={styles.background} src={videoSrc} alt="" />
      <div className={styles.heading}>
        <h1 className={styles.head1}>{title}</h1>
        <div className={styles.headAbout}>
        <p>{description}</p>
        <Link href="/ContactUs"><button>Let's talk</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Hero;
