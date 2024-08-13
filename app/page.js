"use client"
import Contact from "@/components/Contact/contact";
import Faq from "@/components/Faq/Faq";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero"
import Services from "@/components/Home/Services";
import Review from "@/components/Home/Review";
import SuccessStories from "@/components/Home/Success";
import SuccessCTA from "@/components/Home/Successcta";
import Whyus from "@/components/Home/whyus";
import LocomotiveScroll from 'locomotive-scroll';
import styles from "@/styles/homepage.module.css"
import { useEffect } from "react";



const faqs = [
  {
    question: "Why choose Veritas Analytica?",
    answer:
      "We deliver exceptional AI model development, data analytics, data mining, and process automation, providing expertise that saves costs and enhances decision-making and ROI for SMEs.",
  },
  {
    question: "Do you provide post-development support?",
    answer:
      "Yes, we offer comprehensive post-development support for seamless integration and success.",
  },
  {
    question: "What sets your developers apart?",
    answer:
      "Our developers are experts in data analytics, committed to innovation and client-focused solutions.",
  },
  {
    question: "Will my business benefit from data analytics?",
    answer:
      "Yes, data analytics provides valuable insights, optimizes operations, and supports strategic decisions.",
  },
  {
    question: "What is the cost of a customized dashboard?",
    answer:
      "Costs vary by project complexity. Contact us for a tailored quote.",
  },
];

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
   


  return (
    <>
      <div className={styles.wrap}>
      <Hero />
      <Services />
      <Clients />
      <SuccessStories />
      <SuccessCTA />
      <Whyus />
      <Review />
      <Faq faqs={faqs}/>
      <Contact />
      </div>
    </>
  );
}
