import styles from "@/styles/Aboutus/desc.module.css";

const AboutDesc = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutCard1}>
        <h1>Who We Are?</h1>
        <p>
          We are a US-based data analytics and AI consulting company specializing in tailored data mining solutions, data visualization, business process automation, and AI model development. Our expert team, led by an ex-Microsoft leader, delivers high-impact solutions, enabling businesses to scale and succeed. Proudly serving over 12 clients across the United States, Saudi Arabia, Australia, and Malaysia, we drive data-driven AI expertise globally. Our core competencies include computer vision, large language models (LLM), financial analysis, predictive analysis, and data engineering. We are committed to transforming data into actionable insights that drive success.
        </p>
      </div>
      <div className={styles.aboutCard2}>
        <h1>Our Mission</h1>
        <p>
          At Veritas Analytica, our mission is to turn data into decisive action, providing truthful analytics and ensuring success for every business we partner with. We enable SMEs by designing tailored solutions, optimizing resource usage, and helping them scale and succeed. 
        </p>
      </div>
      <div className={styles.aboutCard2}>
        <h1>Our Vision</h1>
        <p>
          At Veritas Analytica, we envision a future where data and AI are the driving forces behind every strategic decision, uncovering hidden truths that lead to groundbreaking insights and innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutDesc;
