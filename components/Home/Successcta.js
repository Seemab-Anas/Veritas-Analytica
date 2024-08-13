import styles from "@/styles/HomeCompStyles/sucesscta.module.css";
import Link from "next/link";

const SuccessCTA = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={`${styles.heroBannerTitle} ${styles.ariaHidden}`} aria-hidden="true">
        Their Success Began Here. Yours Can Too.
      </div>
      <img className={styles.heroBannerImage} data-scroll data-scroll-speed="0.5" src="/sucess.jpg" alt="Success Banner" />
      <h1 className={`${styles.heroBannerTitle} ${styles.heroBannerStrokedTitle}`}>
        Their Success Began Here. Yours Can Too.
      </h1>
        <Link href="/ContactUs"><button className={styles.ctabtn}>FREE CONSULTATION NOW!</button></Link>      
    </div>
  );
};

export default SuccessCTA;
