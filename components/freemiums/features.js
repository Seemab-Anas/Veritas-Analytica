import styles from "@/styles/Freemiums/features.module.css";

const Features = ({ features }) => {
  return (
    <div className={styles.cont}>
      <h1>Features</h1>
      <div className={styles.card_cont}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <img src={feature.image} alt="feature image" />
            <div className={styles.grad}></div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <button className={styles.btn}>Try for Free Today</button>
    </div>
  );
};

export default Features;
