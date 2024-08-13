"use client"
import styles from "@/styles/NavStyles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  useGSAP(() => {
    const menu = document.querySelector(`.${styles.menu}`);
    const menuCont = document.querySelector(`.${styles.menu_cont}`);
    const close = document.querySelector(`.${styles.close}`);

    // Open menu animation
    menu.addEventListener('click', () => {
      gsap.to(menuCont, { x: 0, duration: 0.5, ease: "power3.out" });
    });

    // Close menu animation
    close.addEventListener('click', () => {
      gsap.to(menuCont, { x: "100%", duration: 0.5, ease: "power3.in" });
    });
  });

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.navLeft}>
        <Link href="/">
          <Image src="/logo.png" alt="Company Logo" width={40} height={40} />
        </Link>
        <div className={styles.dropdown}>
          <Link href="#">Services</Link>
          <ul className={styles.submenu}>
            <li>
              <Link href="/Services/AiModel">AI Model Development</Link>
            </li>
            <li>
              <Link href="/Services/ProcessAutomation">Process Automation</Link>
            </li>
            <li>
              <Link href="/Services/DataVisualization">Data Visualization</Link>
            </li>
            <li>
              <Link href="/Services/DataAnalytic">Data Analysis</Link>
            </li>
            <li>
              <Link href="/Services/DataMining">Data Mining</Link>
            </li>
            <li>
              <Link href="/Services/DevOps">DevOps</Link>
            </li>
          </ul>
        </div>
        <div className={styles.dropdown}>
          <Link href="#">Industries</Link>
          <ul className={styles.submenu}>
            <li>
              <Link href="/Industries/Healthcare">Healthcare</Link>
            </li>
            <li>
              <Link href="/Industries/Travel">Travel</Link>
            </li>
            <li>
              <Link href="/Industries/Retail">Retail</Link>
            </li>
            <li>
              <Link href="/Industries/Entertainment">Entertainment</Link>
            </li>
            <li>
              <Link href="/Industries/Finance">Finance</Link>
            </li>
            <li>
              <Link href="/Industries/Education">Education</Link>
            </li>
          </ul>
        </div>
        <Link href="/Portfolio">Portfolio</Link>
        <div className={styles.dropdown}>
          <Link href="#">Freemiums</Link>
          <ul className={styles.submenu}>
            <li>
              <Link href="/Freemiums/Freemium1">Freemium 1</Link>
            </li>
            <li>
              <Link href="/Freemiums/Freemium2">Freemium 2</Link>
            </li>
            <li>
              <Link href="/Freemiums/Freemium3">Freemium 3</Link>
            </li>
          </ul>
        </div>
        <Link href="/AboutUs">About Us</Link>
      </div>
      <Link href="/Contact" className={styles.navRight}>
        <div>
          <button>Get in touch</button>
          <Image
            src="/navbar/person.jpg"
            alt="Contact Person"
            width={40}
            height={40}
          />
        </div>
      </Link>
      <div className={styles.menu}>
        <img src="/hamburger.png" />
      </div>
      <div className={styles.menu_cont}>
          <Link className={styles.outerlink} href="/">Home</Link>
          <Link className={styles.outerlink} href="/Portfolio">Portfolio</Link>
        <details>
          <summary>Services</summary>
          <ul>
            <li>
              <Link className={styles.sublink} href="/Services/AiModel">AI Model Development</Link>
            </li>
            <li>
              <Link href="/Services/ProcessAutomation">Process Automation</Link>
            </li>
            <li>
              <Link href="/Services/DataVisualization">Data Visualization</Link>
            </li>
            <li>
              <Link href="/Services/DataAnalytic">Data Analysis</Link>
            </li>
            <li>
              <Link href="/Services/DataMining">Data Mining</Link>
            </li>
            <li>
              <Link href="/Services/DevOps">DevOps</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Industries</summary>
          <ul>
            <li>
              <Link href="/Industries/Healthcare">Healthcare</Link>
            </li>
            <li>
              <Link href="/Industries/Travel">Travel</Link>
            </li>
            <li>
              <Link href="/Industries/Retail">Retail</Link>
            </li>
            <li>
              <Link href="/Industries/Entertainment">Entertainment</Link>
            </li>
            <li>
              <Link href="/Industries/Finance">Finance</Link>
            </li>
            <li>
              <Link href="/Industries/Education">Education</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Freemiums</summary>
          <ul>
            <li>
              <Link href="/Freemiums/Freemium1">Freemium 1</Link>
            </li>
            <li>
              <Link href="/Freemiums/Freemium2">Freemium 2</Link>
            </li>
            <li>
              <Link href="/Freemiums/Freemium3">Freemium 3</Link>
            </li>
          </ul>
        </details>
        <Link className={styles.outerlink} href="/AboutUs">About Us</Link>
        <Link className={styles.outerlink} href="/Contact">Contact Us</Link>
        <img className={styles.close} src="/close.png"/>
      </div>
    </nav>
  );
};

export default Navbar;
