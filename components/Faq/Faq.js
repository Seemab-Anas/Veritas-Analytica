"use client"
import styles from "@/styles/faq.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from "next/image";


const Faq = ({faqs}) => {

  useGSAP(() => {
    const qnaItems = document.querySelectorAll(`.${styles.qna}`);

    const animateQnaOpen = (qna) => {
      gsap.to(qna.querySelector(`.${styles.qna_down}`), {
        height: 'auto',
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };

    const animateQnaClose = (qna) => {
      gsap.to(qna.querySelector(`.${styles.qna_down}`), {
        height: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };

    qnaItems.forEach((qna) => {
      qna.addEventListener('mouseenter', () => {
        animateQnaOpen(qna);
      });
      qna.addEventListener('mouseleave', () => {
        animateQnaClose(qna);
      });
    });

    qnaItems.forEach((qna) => {
      qna.removeEventListener('mouseenter', () => {
        animateQnaOpen(qna);
      });
      qna.removeEventListener('mouseleave', () => {
        animateQnaClose(qna);
      });
    });
  });

  return (
    <div id="faq" className={styles.faq}>
      <div id="faq-left" className={styles.faq_left}>
        <h1>FAQ</h1>
      </div>
      <div id="faq-right" className={styles.faq_right}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.qna}>
            <div className={styles.qna_up}>
              <h2>{faq.question}</h2>
              <img src="/arrowUp.png" alt="arrow" />
            </div>
            <div className={styles.qna_down}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
