import styles from "@/styles/Aboutus/hero.module.css"
import Image from 'next/image';
import Link from "next/link";

const hero = () => {
  return (
  <div id="about-page1" className={styles.aboutPage}>
    <Image
      src="/aboutus/background_veritas.png"
      alt="Background Veritas"
      layout="fill"
      className={styles.backgroundImage}
    />
    <div className={styles.grad}></div>
    <h1>Our Team Drives the 4th Industrial Revolution <br /> with Data Intelligence and AI</h1>
    <p>Your Top AI and Data Analytics Partner</p>
    <Link href="/ContactUs"><button className={styles.button}>Get Free Consultation!</button></Link>
  </div>
  )
}

export default hero
