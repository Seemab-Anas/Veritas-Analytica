"use client";
import { useState } from 'react';

import Image from "next/image";
import styles from "@/styles/HomeCompStyles/services.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Link from 'next/link';


gsap.registerPlugin(ScrollTrigger);


const Services = () => {

  useGSAP(() => {
    gsap.from("#service",{
      transform: "translateY(-100vh) rotate(15deg) translate(20%,-30%) skewY(-10deg)",
      opacity:0.2,
      scrollTrigger:{
        trigger:"#service",
        scrub:1,
        start:"top -50%",
        end:"top -150%",
      }
    })
  });

  return (
      <section className={styles.services} id='service'>
      <h1>Our Advanced Data and AI Services</h1>
      <div className={styles.serviceCont}>
        {[
          {
            title: "Process Automation",
            desc: "Tailored solutions to enhance your operational efficiency seamlessly.",
            img: "/Services/auto.png",
            source: "/Services/ProcessAutomation",
          },
          {
            title: "DevOps",
            desc: "Streamline your development and operations for faster, more efficient workflows.",
            img: "/Services/devops.png",
            source: "/Services/DevOps",
          },
          {
            title: "Data Analytics",
            desc: "Custom data analytics solutions to boost efficiency and keep you ahead.",
            img: "/Services/Analytics.png",
            source: "/Services/DataAnalytic",
          },
          {
            title: "Data Mining",
            desc: "Gain insights, streamline decisions, and drive growth with our data mining expertise.",
            img: "/Services/mining.png",
            source: "/Services/DataMining",
          },
          {
            title: "AI Model Development",
            desc: "Turn challenges into growth opportunities with our powerful AI solutions.",
            img: "/Services/aimodel.png",
            source: "/Services/AiModel",
          },
          {
            title: "Data Visualization",
            desc: "Transform complex data into clear, actionable visual insights to drive smarter decisions.",
            img: "/Services/dataVisual.png",
            source: "/Services/DataVisualization",
          },
        ].map((service, index) => (
        <Link className={styles.links} href={service.source}>
          <div key={index} className={styles.serviceCard}>
            <h1>{service.title} <img src="/up-right-arrow.png"/> </h1>
            <p>{service.desc}</p>
            <div className={styles.imageWrapper}>
              <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                objectFit="contain"
                className={styles.serviceImage}
              />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
