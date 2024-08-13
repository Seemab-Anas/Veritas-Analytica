import styles from "@/styles/Freemiums/about.module.css";

const About = ({ heading, description, benefits }) => {
  return (
    <div className={styles.section}>
      <div className={styles.about}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.benefits}>
        <h1>Benefits:</h1>
        <div className={styles.contain}>
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
