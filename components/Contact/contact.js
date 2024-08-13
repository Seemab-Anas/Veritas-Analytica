import Image from 'next/image';
import styles from '@/styles/contact.module.css';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <Image
        className={styles.contactBack}
        src="/contact/modern-geometric.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className={styles.contactLeft}>
        <h1>
          <span>
            <Image
              id="dp"
              className={styles.dp}
              src="/contact/dp.webp"
              alt="Display Picture"
              width={96} 
              height={96} 
              quality={100}
            />
          </span>
          Get in Touch Today
        </h1>
        <p>
          Call us at <b>+1 206 925 3771</b> <br /> 
          email at <b>growth@veritasanalytica.ai</b> <br /> 
          <Link href="/ContactUs"><button className={styles.contactus}>Contact Us</button></Link>
        </p>
      </div>
      <div className={styles.contactRight}>
        <p>We will help you overcome your data and AI challenges.</p>
      </div>
    </div>
  );
}

export default Contact;
