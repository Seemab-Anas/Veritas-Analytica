import styles from "@/styles/CaseStudy/feature.module.css";

const Feature = ({ features }) => {
  return (
    <div className={styles.cont}>
      <h1>Features of Our Solution</h1>
      <div>
        {features.map((feature, index) => (
          <div className={styles.box} key={index}>
            <img src={feature.imgSrc} alt={feature.title} />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
