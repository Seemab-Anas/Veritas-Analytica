import styles from "@/styles/FootStyles/foot.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerUp}>
        <div className={styles.footCol1}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={styles.footCol2}>
          <h2>Company</h2>
          <Link href="/"><h3>Home</h3></Link>
          <Link href="/Portfolio"><h3>Portfolio</h3></Link>
          <Link href="#"><h3>AI Freemium</h3></Link>
          <Link href="/AboutUs"><h3>About Us</h3></Link>
        </div>
        <div className={styles.footCol3}>
          <h2>Services</h2>
          <Link href="/Services/AiModel"><h3>AI Model Development</h3></Link>
          <Link href="/Services/DataAnalytic"><h3>Data Analytics</h3></Link>
          <Link href="/Services/DataMining"><h3>Data Mining</h3></Link>
          <Link href="/Services/DataVisualization"><h3>Data Visualization</h3></Link>
          <Link href="/Services/DevOps"><h3>Dev Ops</h3></Link>
          <Link href="/Services/ProcessAutomation"><h3>Process Automation</h3></Link>
        </div>
        <div className={styles.footCol4}>
          <h2>Contact Us</h2>
          <h3 className={styles.phone}><span><img src="/footer/contact.png" alt="" /></span>+ 1 206 925 3771</h3>
          <h3 className={styles.mail}><span><img src="/footer/email.png" alt="" /></span>info@veritasanalytica.ai</h3>
          <h3 className={styles.linkedin}><span><img src="/footer/linkedin.png" alt="" /></span>LinkedIn</h3>
          <h3 className={styles.facebook}><span><img src="/footer/facebook.png" alt="" /></span>Facebook</h3>
        </div>
        <div className={styles.footCol5}>
          <h2>Legal</h2>
          <h3>Privacy</h3>
          <h3>Terms</h3>
        </div>
      </div>
      <div className={styles.footerDown}>
        <h4><i className="ri-copyright-line"></i>2024 VERITAS ANALYTICA All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
