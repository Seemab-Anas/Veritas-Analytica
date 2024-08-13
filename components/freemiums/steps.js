import styles from "@/styles/Freemiums/step.module.css";

const Steps = ({ steps }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <h1>How It Works</h1>
        <button className={styles.btn}>Upload Your CSV and Start Now</button>
      </div>
      <div className={styles.right}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.st_left}>
              <img src="/freemium/mesh.jpg" alt="mesh" />
              <h1>{`STEP ${index + 1}`}</h1>
              <h2>{step.title}</h2>
            </div>
            <div className={styles.st_right}>
              <ul>
                {step.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
