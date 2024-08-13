"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/ServicesCompStyles/tech.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TechStack = ({ totalIcons, title, aiTechIcons }) => {
  const [hoveredIconName, setHoveredIconName] = useState('');

  useGSAP(() => {
    gsap.to("#container", {
      rotate: 360,
      scrollTrigger: {
        trigger: "#container",
        scrub: 2,
        start: "top 80%",
        end: "top -30%"
      }
    });
    gsap.to("#logoimg", {
      rotate: -720,
      scrollTrigger: {
        trigger: "#logoimg",
        scrub: 5,
        start: "top 80%",
        end: "top -30%"
      }
    });
  });

  return (
    <div className={styles.sec4}>
      <h1>{title}</h1>
      <div className={styles.sec4Static}>
        <div className={styles.iconText}>
          <h6>{hoveredIconName || 'Hover on icons'}</h6>
        </div>
        <div className={styles.sec4Cont} id='container' style={{ '--total-icons': totalIcons }}>
          <div className={styles.icon}>
            {aiTechIcons.map((icon, index) => (
              <div
                className={styles.imageBx}
                key={index}
                style={{ '--i': index + 1 }}
                data-name={icon.name}
                onMouseEnter={() => setHoveredIconName(icon.name)}
                onMouseLeave={() => setHoveredIconName('')}
              >
                <Image
                  className={styles.logo}
                  id='logoimg'
                  src={icon.src}
                  alt={icon.name}
                  width={60}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
